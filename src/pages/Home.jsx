import logo from '../images/logo.svg';
import '../sass/_home.scss';
import { aboutItems, menuItems, eventItems } from '../images/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
	const [selectedEvent, setSelectedEvent] = useState(0);

	const handleEventClick = (index) => {
		setSelectedEvent(index);
	};
	return (
		<main>
			<section className='hero-section'>
				<div className='hero-section-content'>
					<div className='hero-section-cta'>
						<img src={logo}></img>
						<h2>Exquisite dining since 1989</h2>
						<p>
							Experience our seasonal menu in beautiful country surroundings.
							Eat the freshest produce from the comfort of our farmhouse.
						</p>
						<Link to='/booking'>
							<button className='reserve-btn'>Book a Table</button>
						</Link>
					</div>
				</div>
			</section>

			<section className='about-section'>
				{aboutItems.map((item) => {
					return (
						<div className='about-item' key={item.id}>
							<picture>
								<source media='(min-width:1080px)' srcSet={item.images.desk} />
								<source media='(min-width:768px)' srcSet={item.images.tablet} />
								<img src={item.images.mobile} alt={item.title} />
							</picture>
							<div className='about-wrapper'>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
						</div>
					);
				})}
			</section>

			<section className='menu-section'>
				<div className='menu-content'>
					<h2>A few highlights from our menu</h2>
					<p>
						We cater for all dietary requirements, but here’s a glimpse at some
						of our diner’s favourites. Our menu is revamped every season.
					</p>
				</div>
				<div className='menu-items'>
					{menuItems.map((item) => {
						return (
							<div className='menu-item' key={item.id}>
								<picture>
									<source
										media='(min-width:1080px)'
										srcSet={item.images.desk}
									/>
									<source
										media='(min-width:768px)'
										srcSet={item.images.tablet}
									/>
									<img src={item.images.mobile} alt={item.title} />
								</picture>
								<div>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className='events-section'>
				<div className='event'>
					<picture>
						<source
							media='(min-width:1080px)'
							srcSet={eventItems[selectedEvent].images.desk}
						/>
						<source
							media='(min-width:768px)'
							srcSet={eventItems[selectedEvent].images.tablet}
						/>
						<img
							src={eventItems[selectedEvent].images.mobile}
							alt={eventItems[selectedEvent].title}
						/>
					</picture>
					<div className='event-wrapper'>
						<ul className='wrapper-item'>
							{eventItems.map((item, index) => (
								<li
									key={item.id}
									onClick={() => handleEventClick(index)}
									className={selectedEvent === index ? 'active' : 'unactive'}
								>
									{item.title}
								</li>
							))}
						</ul>
						<div className='event-content wrapper-item'>
							<h2>{eventItems[selectedEvent].title}</h2>
							<p>{eventItems[selectedEvent].description}</p>
						</div>
						<Link to='/booking' className='wrapper-item'>
							<button className='events-btn wrapper-item'>Book a Table</button>
						</Link>
					</div>
				</div>
			</section>

			<footer>
				<div className='footer-cta'>
					<h2>Ready to make a reservation?</h2>
					<Link to='/booking'>
						<button className='reserve-btn'>Book a table</button>
					</Link>
				</div>
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

export default Home;
