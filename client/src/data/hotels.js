const hotels = [
  {
    id: 1,
    name: 'Grand Plaza Hotel',
    city: 'New York, USA',
    address: '768 5th Avenue, New York, NY 10019',
    rating: 4.7,
    pricePerNight: 220,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plaza%20Hotel%20NYC.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel1/800/500',
      'https://picsum.photos/seed/hotel1b/800/500',
      'https://picsum.photos/seed/hotel1c/800/500',
    ],
    description: 'A luxurious stay in the heart of Manhattan with skyline views.',
    longDescription:
      'Grand Plaza Hotel puts you steps away from Central Park and the best shopping on 5th Avenue. Rooms feature floor-to-ceiling windows with panoramic skyline views, marble bathrooms, and plush bedding for a truly restful night in the city that never sleeps.',
    amenities: ['Free Wi-Fi', 'Rooftop bar', 'Fitness center', '24-hour room service', 'Valet parking'],
  },
  {
    id: 2,
    name: 'Ocean Breeze Resort',
    city: 'Malibu, USA',
    address: '22000 Pacific Coast Highway, Malibu, CA 90265',
    rating: 4.5,
    pricePerNight: 310,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Malibu%20Beach%20Panorama.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel2/800/500',
      'https://picsum.photos/seed/hotel2b/800/500',
      'https://picsum.photos/seed/hotel2c/800/500',
    ],
    description: 'Beachfront rooms with private balconies and ocean views.',
    longDescription:
      'Wake up to the sound of the waves at Ocean Breeze Resort. Every room opens onto a private balcony overlooking the Pacific, and the resort offers direct beach access, a saltwater infinity pool, and sunset yoga sessions on the sand.',
    amenities: ['Private beach access', 'Infinity pool', 'Spa', 'Free Wi-Fi', 'Complimentary breakfast'],
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    city: 'Aspen, USA',
    address: '415 Dean Street, Aspen, CO 81611',
    rating: 4.8,
    pricePerNight: 275,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aspen%20Saint%20Regis%20Hotel.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel3/800/500',
      'https://picsum.photos/seed/hotel3b/800/500',
      'https://picsum.photos/seed/hotel3c/800/500',
    ],
    description: 'Cozy cabins nestled in the mountains, perfect for winter getaways.',
    longDescription:
      'Mountain View Lodge offers rustic-chic cabins just minutes from the slopes. Curl up by a stone fireplace after a day of skiing, or relax in the outdoor hot tub with sweeping views of the Rockies.',
    amenities: ['Ski-in/ski-out access', 'Hot tub', 'Fireplace lounge', 'Free parking', 'Pet friendly'],
  },
  {
    id: 4,
    name: 'City Center Inn',
    city: 'Chicago, USA',
    address: '88 W Randolph Street, Chicago, IL 60601',
    rating: 4.1,
    pricePerNight: 150,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Loews%20Hotel%20Tower%20in%20Chicago.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel4/800/500',
      'https://picsum.photos/seed/hotel4b/800/500',
      'https://picsum.photos/seed/hotel4c/800/500',
    ],
    description: 'Affordable comfort within walking distance of downtown attractions.',
    longDescription:
      'City Center Inn is a budget-friendly base for exploring Chicago, with the Loop, Millennium Park, and the Riverwalk all within easy walking distance. Clean, comfortable rooms and friendly service make it a favorite with return visitors.',
    amenities: ['Free Wi-Fi', 'Business center', 'Continental breakfast', 'Laundry service'],
  },
  {
    id: 5,
    name: 'Sunset Paradise Hotel',
    city: 'Miami, USA',
    address: '1500 Ocean Drive, Miami Beach, FL 33139',
    rating: 4.3,
    pricePerNight: 190,
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cavalier%20South%20Beach%20Hotel%2C%20Miami%20Beach%2C%20Florida.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel5/800/500',
      'https://picsum.photos/seed/hotel5b/800/500',
      'https://picsum.photos/seed/hotel5c/800/500',
    ],
    description: 'Vibrant hotel with rooftop pool and stunning sunset views.',
    longDescription:
      'Right on Ocean Drive, Sunset Paradise Hotel is the pulse of South Beach. Enjoy cocktails at the rooftop pool as the sun sets over the Miami skyline, with the Art Deco district and the beach both just outside the door.',
    amenities: ['Rooftop pool', 'Beach access', 'Nightclub', 'Valet parking', 'Free Wi-Fi'],
  },
  {
    id: 6,
    name: 'Historic Riverside Hotel',
    city: 'Paris, France',
    address: '12 Quai de Montebello, 75005 Paris, France',
    rating: 4.6,
    pricePerNight: 260,
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Paris-Notre%20Dame-130-Quai%20de%20Montebello-2017-gje.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel6/800/500',
      'https://picsum.photos/seed/hotel6b/800/500',
      'https://picsum.photos/seed/hotel6c/800/500',
    ],
    description: 'A charming historic property overlooking the Seine river.',
    longDescription:
      'Housed in a beautifully restored 19th-century building, Historic Riverside Hotel offers views of Notre-Dame and the Seine. Antique furnishings and modern comforts blend seamlessly across its intimate, individually decorated rooms.',
    amenities: ['River view rooms', 'Free Wi-Fi', 'Concierge', 'Airport shuttle', 'Bar'],
  },
  {
    id: 7,
    name: 'Zen Garden Ryokan',
    city: 'Kyoto, Japan',
    address: '3 Chome Gion, Higashiyama Ward, Kyoto, Japan',
    rating: 4.9,
    pricePerNight: 340,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tawaraya%20Ryokan%2C%20Kyoto%2001.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel7/800/500',
      'https://picsum.photos/seed/hotel7b/800/500',
      'https://picsum.photos/seed/hotel7c/800/500',
    ],
    description: 'Traditional Japanese hospitality with tranquil garden views.',
    longDescription:
      'Zen Garden Ryokan offers an authentic taste of Japanese hospitality, with tatami-floored rooms, private onsen baths, and kaiseki dinners served in your room. Every window frames a meticulously tended Japanese garden.',
    amenities: ['Private onsen', 'Kaiseki dining', 'Tea ceremony', 'Garden views', 'Yukata provided'],
  },
  {
    id: 8,
    name: 'Desert Oasis Resort',
    city: 'Dubai, UAE',
    address: 'Sheikh Zayed Road, Dubai, UAE',
    rating: 4.4,
    pricePerNight: 400,
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hotel%20Burj%20al%20Arab%20in%20Dubay%202.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel8/800/500',
      'https://picsum.photos/seed/hotel8b/800/500',
      'https://picsum.photos/seed/hotel8c/800/500',
    ],
    description: 'Opulent desert resort with world-class spa and dining.',
    longDescription:
      'Desert Oasis Resort delivers five-star luxury in the heart of Dubai, with a world-class spa, an infinity pool overlooking the skyline, and a choice of award-winning restaurants. Every suite is designed for indulgence.',
    amenities: ['Infinity pool', 'Luxury spa', 'Multiple restaurants', 'Butler service', 'Free Wi-Fi'],
  },
  {
    id: 9,
    name: 'Alpine Chalet Hotel',
    city: 'Zurich, Switzerland',
    address: 'Bahnhofstrasse 45, 8001 Zurich, Switzerland',
    rating: 4.2,
    pricePerNight: 230,
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Chalet%20Hotel%20Alte%20Post%2C%20Grindelwald.jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel9/800/500',
      'https://picsum.photos/seed/hotel9b/800/500',
      'https://picsum.photos/seed/hotel9c/800/500',
    ],
    description: 'Charming alpine-style hotel with easy access to ski slopes.',
    longDescription:
      'Alpine Chalet Hotel combines Swiss precision with cozy mountain charm. Wood-paneled rooms, a hearty breakfast buffet, and a shuttle to the nearby ski slopes make it an ideal base for both summer hikes and winter sports.',
    amenities: ['Ski shuttle', 'Breakfast buffet', 'Sauna', 'Free Wi-Fi', 'Ski storage'],
  },
  {
    id: 10,
    name: 'Harborfront Suites',
    city: 'Sydney, Australia',
    address: '1 Circular Quay, Sydney NSW 2000, Australia',
    rating: 4.5,
    pricePerNight: 285,
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sydney%20Harbour%20Bridge%20from%20Circular%20Quay%20(cropped).jpg?width=700',
    gallery: [
      'https://picsum.photos/seed/hotel10/800/500',
      'https://picsum.photos/seed/hotel10b/800/500',
      'https://picsum.photos/seed/hotel10c/800/500',
    ],
    description: 'Modern suites with panoramic views of Sydney Harbour.',
    longDescription:
      'Harborfront Suites sits right on Circular Quay, with the Opera House and Harbour Bridge visible from every suite. Spacious living areas, a full kitchenette, and a rooftop pool make it perfect for longer stays.',
    amenities: ['Harbour view', 'Rooftop pool', 'Kitchenette', 'Free Wi-Fi', 'Gym'],
  },
]

export default hotels
