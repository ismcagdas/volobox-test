const dummyImage = (label, color) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
      `<rect width="100%" height="100%" fill="${color}"/>` +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      `font-family="sans-serif" font-size="22" fill="#ffffff">${label}</text>` +
      '</svg>',
  )

const restaurants = [
  {
    id: 1,
    name: 'Trattoria Bella',
    imageUrl: dummyImage('Trattoria Bella', '#b5483a'),
    city: 'New York, USA',
    cuisine: 'Italian',
    rating: 4.6,
    priceRange: '$$$',
    description: 'Handmade pasta and wood-fired dishes in a cozy Manhattan dining room.',
  },
  {
    id: 2,
    name: 'Sakura Sushi House',
    imageUrl: dummyImage('Sakura Sushi House', '#c2677f'),
    city: 'Tokyo, Japan',
    cuisine: 'Japanese',
    rating: 4.8,
    priceRange: '$$$$',
    description: 'Omakase counter serving the freshest seasonal fish.',
  },
  {
    id: 3,
    name: 'Le Petit Bistro',
    imageUrl: dummyImage('Le Petit Bistro', '#3f6e8c'),
    city: 'Paris, France',
    cuisine: 'French',
    rating: 4.4,
    priceRange: '$$',
    description: 'Classic French bistro fare with a relaxed neighborhood feel.',
  },
  {
    id: 4,
    name: 'Ocean Grill',
    imageUrl: dummyImage('Ocean Grill', '#2f8a8a'),
    city: 'Malibu, USA',
    cuisine: 'Seafood',
    rating: 4.3,
    priceRange: '$$$',
    description: 'Fresh catch grilled to order with sunset views over the Pacific.',
  },
]

export default restaurants
