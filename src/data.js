import tour_1 from '../src/images/tour-1.jpeg'
import tour_2 from '../src/images/tour-2.jpeg'
import tour_3 from '../src/images/tour-3.jpeg'
import tour_4 from '../src/images/tour-4.jpeg'
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.facebook.com/', icon: 'fab fa-twitter' },
  {
    id: 3,
    href: 'https://github.com/TheWonderingGecko/backroads',
    icon: 'fab fa-github',
  },
]

export const toursSections = [
  {
    id: 1,
    tours_image: tour_1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    lorem:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: ' china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    tours_image: tour_2,
    date: 'October 1st, 2020',
    title: 'Best of Java',
    lorem:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: ' indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    tours_image: tour_3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    lorem:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: ' Honk kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    tours_image: tour_4,
    date: 'December 5th, 2019',
    title: 'Kenya Highlands',
    lorem:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: ' Kenya',
    duration: '20 days',
    price: 'from $3300',
  },
]

export const servicesSection = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    serviceTitle: 'saving money',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    serviceTitle: 'Endless Hiking',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    serviceTitle: 'Amazing Comfort',
  },
]
