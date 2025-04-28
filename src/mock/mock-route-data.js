import { generateRandomId } from '../utils';

const destinations = [
  {
    'id': generateRandomId(),
    'description': `
      Cras aliquet varius magna, non porta ligula feugiat eget.
      Fusce tristique felis at fermentum pharetra.
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
    `,
    'name': 'Barcelona',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=1',
        'description': 'Barcelona 1'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=2',
        'description': 'Barcelona 2'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=3',
        'description': 'Barcelona 3'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
      Aliquam erat volutpat.
    `,
    'name': 'Tokyo',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=4',
        'description': 'Tokyo 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Nunc fermentum tortor ac porta dapibus.
      In rutrum ac purus sit amet tempus.
    `,
    'name': 'New York',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=5',
        'description': 'New York 1'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=6',
        'description': 'New York 2'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras aliquet varius magna, non porta ligula feugiat eget.
    `,
    'name': 'Sydney',
    'pictures': []
  },
  {
    'id': generateRandomId(),
    'description': `
      Fusce tristique felis at fermentum pharetra.
    `,
    'name': 'Paris',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=7',
        'description': 'Paris 1'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=8',
        'description': 'Paris 2'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=9',
        'description': 'Paris 3'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    `,
    'name': 'Rome',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=10',
        'description': 'Rome 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam erat volutpat.
      Nunc fermentum tortor ac porta dapibus.
    `,
    'name': 'London',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=11',
        'description': 'London 1'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=12',
        'description': 'London 2'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
    `,
    'name': 'Berlin',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=13',
        'description': 'Berlin 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam erat volutpat.
    `,
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=14',
        'description': 'Amsterdam 1'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=15',
        'description': 'Amsterdam 2'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=16',
        'description': 'Amsterdam 3'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=17',
        'description': 'Amsterdam 4'
      }
    ]
  }
];

const offersByType = [
  {
    'type': 'flight',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Priority Boarding', 'price': 10 },
      { 'id': generateRandomId(), 'title': 'Extra Luggage', 'price': 25 },
      { 'id': generateRandomId(), 'title': 'Meal Service', 'price': 15 }
    ]
  },
  {
    'type': 'train',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Window Seat', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Extra Legroom', 'price': 20 },
      { 'id': generateRandomId(), 'title': 'Quiet Zone', 'price': 10 }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Food Package', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Wi-Fi', 'price': 5 },
      { 'id': generateRandomId(), 'title': 'Power Outlet', 'price': 3 }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Guide', 'price': 20 },
      { 'id': generateRandomId(), 'title': 'Skip the Line', 'price': 40 },
      { 'id': generateRandomId(), 'title': 'VIP Access', 'price': 50 }
    ]
  },
  {
    'type': 'taxi',
    'offers': [
      { 'id': generateRandomId(), 'title': 'VIP Transfer', 'price': 50 },
      { 'id': generateRandomId(), 'title': 'Pet-Friendly', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Airport Shuttle', 'price': 20 }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Ocean View', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Premium Cabin', 'price': 100 },
      { 'id': generateRandomId(), 'title': 'All-Inclusive', 'price': 150 }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Luxury Car', 'price': 75 },
      { 'id': generateRandomId(), 'title': 'GPS Rental', 'price': 10 },
      { 'id': generateRandomId(), 'title': 'Child Seat', 'price': 5 }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Express Check-in', 'price': 5 },
      { 'id': generateRandomId(), 'title': 'Priority Check-in', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Seat Selection', 'price': 10 }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Wine Pairing', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Tasting Menu', 'price': 50 },
      { 'id': generateRandomId(), 'title': 'Chef’s Special', 'price': 40 }
    ]
  }
];

const mockRoutePoints = [
  { 

  }
];

export { mockRoutePoints, offersByType, destinations };
