import logo from '../images/logo.svg';
import '../sass/_booking.scss';
import Form from '../components/Form';
function Booking() {
	return (
		<main>
			<section className='booking-section'>
				<img src={logo} className='logo' />
				<div className='booking-content'>
					<h2>Reservations</h2>
					<p>
						We can’t wait to host you. If you have any special requirements
						please feel free to call on the phone number below. We’ll be happy
						to accommodate you.
					</p>
				</div>
				<Form />
			</section>
			<footer>
				<div className='footer-info'>
					<img src={logo} />
					<div className='info-wrapper'>
						<div className='info'>
							<p>Marthwaite, Sedbergh</p>
							<p>Cumbria</p>
							<p>+00 44 123 4567</p>
						</div>
						<div className='info'>
							<p>Open Times</p>
							<p>Mon - Fri: 09:00 AM - 10:00 PM</p>
							<p>Sat - Sun: 09:00 AM - 11:30 PM</p>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}

export default Booking;
