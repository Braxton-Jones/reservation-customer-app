import minus from '../images/icons/icon-minus.svg';
import plus from '../images/icons/icon-plus.svg';
import '../sass/_form.scss';
import { useState } from 'react';

function Form() {
	const [formInputs, setFormInputs] = useState({
		name: '',
		email: '',
		month: '',
		day: '',
		year: '2023',
		hour: '',
		minute: '',
		amPm: 'AM',
		people: 2,
	});

	function incrementPeople() {
		setFormInputs({
			...formInputs,
			people: formInputs.people + 1,
		});
	}

	function decrementPeople() {
		if (formInputs.people > 2) {
			setFormInputs({
				...formInputs,
				people: formInputs.people - 1,
			});
		}
	}

	function handleInputChange(event) {
		const { name, value } = event.target;
		const uniquePattern = new RegExp(event.target.dataset.pattern);

		if (!event.target.dataset.pattern) {
			setFormInputs({
				...formInputs,
				[name]: value,
			});
		} else {
			if (!uniquePattern.test(value)) {
				event.target.setCustomValidity(`Please enter a valid ${name}`);
				setFormInputs({
					...formInputs,
					[name]: '',
				});
			} else {
				event.target.setCustomValidity('');
				setFormInputs({
					...formInputs,
					[name]: value,
				});
			}
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const dateArray = [
			formInputs.month,
			formInputs.day,
			formInputs.year,
			formInputs.hour,
			formInputs.minute,
		];
		const newHour = Number(dateArray[3]) + (formInputs.amPm === 'PM' ? 12 : 0);
		const formattedDate = new Date(
			dateArray[2],
			dateArray[0] - 1,
			dateArray[1],
			newHour,
			dateArray[4],
		);
		const formattedData = {
			name: formInputs.name,
			email: formInputs.email,
			people: formInputs.people,
			date: formattedDate,
		};
		const { name, email, people, date } = formattedData;
		const postedReservation = { name, email, people, date };
		const response = await fetch('https://reservation-api-ujvu.onrender.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postedReservation),
		});

		if (!response.ok) {
			console.log('Something is Wrong');
			return;
		}

		setFormInputs({
			name: '',
			email: '',
			month: '',
			day: '',
			year: '2023',
			hour: '',
			minute: '',
			amPm: 'AM',
			people: 2,
		});
	}

	return (
		<form className='booking-form' onSubmit={handleSubmit}>
			<label htmlFor='name'></label>
			<input
				type='text'
				id='name'
				name='name'
				placeholder='Name'
				required
				value={formInputs.name}
				onChange={handleInputChange}
			/>

			<label htmlFor='email'></label>
			<input
				type='email'
				id='email'
				name='email'
				placeholder='Email'
				required
				value={formInputs.email}
				onChange={handleInputChange}
			/>

			<section className='date'>
				<label htmlFor='month'>Pick a Date</label>
				<div className='input-wrapper'>
					<input
						type='text'
						id='month'
						name='month'
						placeholder='MM'
						data-pattern='^(|([1-9]|1[0-2]))$'
						maxLength='2'
						value={formInputs.month}
						onChange={handleInputChange}
						required
					/>
					<input
						type='text'
						id='day'
						name='day'
						placeholder='DD'
						maxLength='2'
						data-pattern='^(|0?[1-9]|[1-2][0-9]|3[0-1])$'
						value={formInputs.day}
						onChange={handleInputChange}
						required
					/>
					<select
						type='text'
						id='year'
						name='year'
						value={formInputs.year}
						onChange={handleInputChange}
						required
					>
						<option value='2023'>2023</option>
						<option value='2024'>2024</option>
						<option value='2025'>2025</option>
					</select>
				</div>
			</section>

			<section className='time'>
				<label htmlFor='hour'>Pick a Time</label>
				<div className='input-wrapper'>
					<input
						type='text'
						id='hour'
						name='hour'
						placeholder='09'
						maxLength='2'
						value={formInputs.hour}
						data-pattern='^(|([1-9]|1[0-2]))$'
						onChange={handleInputChange}
						required
					/>
					<input
						type='text'
						id='minute'
						name='minute'
						placeholder='00'
						maxLength='2'
						value={formInputs.minute}
						data-pattern='^(|0?[0-9]|[1-5][0-9])$'
						onChange={handleInputChange}
						required
					/>
					<select
						name='amPm'
						value={formInputs.amPm}
						onChange={handleInputChange}
					>
						<option value='AM'>AM</option>
						<option value='PM'>PM</option>
					</select>
				</div>
			</section>

			<div className='counter'>
				<img src={plus} className='counter-img' onClick={incrementPeople} />
				<p>{formInputs.people} people</p>
				<img src={minus} className='counter-img' onClick={decrementPeople} />
			</div>

			<input type='submit' value='Make Reservation' className='submit-btn' />
		</form>
	);
}

export default Form;
