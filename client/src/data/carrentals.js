import carPhoto1 from '../assets/cars/car-1.jpg'
import carPhoto2 from '../assets/cars/car-2.jpg'
import carPhoto3 from '../assets/cars/car-3.jpg'
import carPhoto4 from '../assets/cars/car-4.jpg'
import carPhoto5 from '../assets/cars/car-5.jpg'
import carPhoto6 from '../assets/cars/car-6.jpg'

const carRentals = [
  {
    id: 5,
    company: 'Dollar',
    vehicleType: 'Van',
    model: 'Volkswagen Beetle (New Beetle)',
    pricePerDay: 75,
    currency: 'USD',
    rating: 4.2,
    reviews: 410,
    features: ['Air Conditioning', 'Automatic', 'Sliding Doors', '7 Seater'],
    availability: true,
    imageUrl: carPhoto5,
  },
  {
    id: 1,
    company: 'Enterprise',
    vehicleType: 'Compact',
    model: 'Ford Mustang',
    pricePerDay: 35,
    currency: 'USD',
    rating: 4.6,
    reviews: 1250,
    features: ['Air Conditioning', 'Automatic', 'USB Port'],
    availability: true,
    imageUrl: carPhoto1,
  },
  {
    id: 2,
    company: 'Hertz',
    vehicleType: 'Sedan',
    model: 'Porsche 911',
    pricePerDay: 48,
    currency: 'USD',
    rating: 4.4,
    reviews: 890,
    features: ['Air Conditioning', 'Automatic', 'Bluetooth', 'Backup Camera'],
    availability: true,
    imageUrl: carPhoto2,
  },
  {
    id: 3,
    company: 'Budget',
    vehicleType: 'SUV',
    model: 'Chevrolet Camaro (6. nesil)',
    pricePerDay: 62,
    currency: 'USD',
    rating: 4.3,
    reviews: 650,
    features: ['Air Conditioning', 'Automatic', 'GPS', 'Roof Rack'],
    availability: true,
    imageUrl: carPhoto3,
  },
  {
    id: 4,
    company: 'Avis',
    vehicleType: 'Luxury',
    model: 'Chevrolet Corvette C7 (Z06)',
    pricePerDay: 89,
    currency: 'USD',
    rating: 4.8,
    reviews: 520,
    features: ['Air Conditioning', 'Automatic', 'Leather Seats', 'Premium Sound'],
    availability: false,
    imageUrl: carPhoto4,
  },
  {
    id: 6,
    company: 'National',
    vehicleType: 'Pickup',
    model: 'BMW M4 (F82)',
    pricePerDay: 55,
    currency: 'USD',
    rating: 4.5,
    reviews: 780,
    features: ['Air Conditioning', 'Automatic', 'Towing Package', 'Bed Cover'],
    availability: true,
    imageUrl: carPhoto6,
  },
]

export default carRentals
