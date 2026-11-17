export const EMAIL = 'harwindersinghsaini015@gmail.com';
export const GITHUB = 'https://github.com/HarwinderSingh15';
export const RESUME = '/Harwinder-Singh-Resume.pdf';

export type App = {
  name: string; line: string; stat: string; role: string;
  color: string; ink: string; url: string; site: string; store?: string;
  shots: { src: string; kind: 'screen' | 'art' }[];
};

export const APPS: App[] = [
  { name: 'Doxie', line: 'Dog community and services marketplace. App, API, admin panel and website, all built solo.', stat: '120+ screens', role: 'Solo build',
    color: '#ffe24d', ink: '#111', url: 'https://doxiecommunity.com', site: 'doxiecommunity.com',
    shots: [{ src: '/shots/doxie-nearby.webp', kind: 'screen' }, { src: '/shots/doxie-events.webp', kind: 'screen' }, { src: '/shots/doxie-services.webp', kind: 'screen' }, { src: '/shots/doxie-matches.webp', kind: 'screen' }] },
  { name: 'Fightbell', line: 'Boxing app that brings news, boxer profiles, rankings, training tools and gyms into one place.', stat: 'On the App Store', role: 'Live',
    color: '#b3101b', ink: '#fff', url: 'https://fightbell.com/', site: 'fightbell.com', store: 'https://apps.apple.com/in/app/fightbell/id6771326873',
    shots: [{ src: '/shots/fightbell-hub.webp', kind: 'screen' }, { src: '/shots/fightbell-home.webp', kind: 'screen' }, { src: '/shots/fightbell-camp.webp', kind: 'screen' }] },
  { name: 'DogDate', line: 'Dating and playdate app for dogs, live on iOS and Android. Sole developer of the app.', stat: '44 screens', role: 'Solo build',
    color: '#45b6f2', ink: '#111', url: 'https://dogdate.co.uk', site: 'dogdate.co.uk',
    shots: [{ src: '/shots/dogdate-phones.webp', kind: 'art' }] },
  { name: 'Flair', line: 'Beauty-booking app. Built stylist background checks and live location tracking.', stat: 'Live tracking', role: 'Team build',
    color: '#f1ece2', ink: '#111', url: 'https://flairapp.co', site: 'flairapp.co',
    shots: [{ src: '/shots/flair-home.webp', kind: 'screen' }, { src: '/shots/flair-book-appointment.webp', kind: 'screen' }, { src: '/shots/flair-my-bookings.webp', kind: 'screen' }] },
  { name: 'Fieldsy', line: 'UK marketplace for booking secure dog fields. Mobile app plus backend features.', stat: '80 screens', role: 'Solo build',
    color: '#4d8831', ink: '#fff', url: 'https://fieldsy.co.uk', site: 'fieldsy.co.uk',
    shots: [{ src: '/shots/fieldsy-home.webp', kind: 'screen' }, { src: '/shots/fieldsy-detail.webp', kind: 'screen' }, { src: '/shots/fieldsy-nearby.webp', kind: 'screen' }] },
];
