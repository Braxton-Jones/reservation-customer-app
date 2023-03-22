// Homepage Images
//About
import enjoyablePlaceDesk from './homepage/enjoyable-place-desktop@2x.jpg';
import enjoyablePlaceTab from './homepage/enjoyable-place-tablet@2x.jpg';
import enjoyablePlaceMob from './homepage/enjoyable-place-mobile@2x.jpg';

import locallySourcedDesk from './homepage/locally-sourced-desktop@2x.jpg';
import locallySourcedTab from './homepage/locally-sourced-tablet@2x.jpg';
import locallySourcedMob from './homepage/locally-sourced-mobile@2x.jpg';

//Menu
import salmonDesk from './homepage/salmon-desktop-tablet@2x.jpg';
import salmonMob from './homepage/salmon-mobile@2x.jpg';

import beefDesk from './homepage/beef-desktop-tablet@2x.jpg';
import beefMob from './homepage/beef-mobile@2x.jpg';

import chocolateDesk from './homepage/chocolate-desktop-tablet@2x.jpg';
import chocolateMob from './homepage/chocolate-mobile@2x.jpg';

//Events
import familyDesk from './homepage/family-gathering-desktop@2x.jpg';
import familyTab from './homepage/family-gathering-tablet@2x.jpg';
import familyMob from './homepage/family-gathering-mobile@2x.jpg';

import specialDesk from './homepage/special-events-desktop@2x.jpg';
import specialTab from './homepage/special-events-tablet@2x.jpg';
import specialMob from './homepage/special-events-mobile@2x.jpg';

import socialDesk from './homepage/social-events-desktop@2x.jpg';
import socialTab from './homepage/social-events-tablet@2x.jpg';
import socialMob from './homepage/social-events-mobile@2x.jpg';

export const aboutItems = [
	{
		id: 1,
		title: 'Enjoyable place for all the family',
		description:
			'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
		images: {
			desk: enjoyablePlaceDesk,
			tablet: enjoyablePlaceTab,
			mobile: enjoyablePlaceMob,
		},
		alt: 'green field with animals',
	},
	{
		id: 2,
		title: 'The most locally sourced food',
		description:
			'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
		images: {
			desk: locallySourcedDesk,
			tablet: locallySourcedTab,
			mobile: locallySourcedMob,
		},
		alt: 'chef plating a scrumptious dish',
	},
];

export const eventItems = [
	{
		id: 1,
		title: 'family gathering',
		description:
			'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
		images: {
			desk: familyDesk,
			tablet: familyTab,
			mobile: familyMob,
		},
	},
	{
		id: 2,
		title: 'special events',
		description:
			'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
		images: {
			desk: specialDesk,
			tablet: specialTab,
			mobile: specialMob,
		},
	},
	{
		id: 3,
		title: 'social events',
		description:
			'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
		images: {
			desk: socialDesk,
			tablet: socialTab,
			mobile: socialMob,
		},
	},
];

export const menuItems = [
	{
		id: 1,
		title: 'seared salmon fillet',
		description:
			'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
		images: {
			desk: salmonDesk,
			mobile: salmonMob,
		},
	},
	{
		id: 2,
		title: 'rosemary filet mignon',
		description:
			'Our prime beef served to your taste with a delicious choice of seasonal sides.',
		images: {
			desk: beefDesk,
			mobile: beefMob,
		},
	},
	{
		id: 3,
		title: 'summer fruit chocolate mousse',
		description:
			'Creamy mousse combined with summer fruits and dark chocolate shavings.',
		images: {
			desk: chocolateDesk,
			mobile: chocolateMob,
		},
	},
];
