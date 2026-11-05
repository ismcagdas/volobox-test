const flights = [
  { id: 1, airline: 'Turkish Airlines', flightNumber: 'TK 1', from: 'Istanbul (IST)', to: 'New York (JFK)', departure: '2026-12-01T09:30:00', arrival: '2026-12-01T19:10:00', stops: 0, price: 1250, cabin: 'Economy' },
  { id: 2, airline: 'Lufthansa', flightNumber: 'LH 1303', from: 'Istanbul (IST)', to: 'London (LHR)', departure: '2026-12-01T07:15:00', arrival: '2026-12-01T10:05:00', stops: 0, price: 320, cabin: 'Economy' },
  { id: 3, airline: 'Emirates', flightNumber: 'EK 124', from: 'London (LHR)', to: 'Dubai (DXB)', departure: '2026-12-02T21:40:00', arrival: '2026-12-03T07:20:00', stops: 0, price: 780, cabin: 'Business' },
  { id: 4, airline: 'Qatar Airways', flightNumber: 'QR 702', from: 'Istanbul (IST)', to: 'Tokyo (HND)', departure: '2026-12-03T01:10:00', arrival: '2026-12-03T22:45:00', stops: 1, price: 1480, cabin: 'Economy' },
  { id: 5, airline: 'Air France', flightNumber: 'AF 1233', from: 'Paris (CDG)', to: 'Istanbul (IST)', departure: '2026-12-04T13:20:00', arrival: '2026-12-04T18:35:00', stops: 0, price: 410, cabin: 'Economy' },
  { id: 6, airline: 'Delta', flightNumber: 'DL 263', from: 'New York (JFK)', to: 'Paris (CDG)', departure: '2026-12-05T22:50:00', arrival: '2026-12-06T12:15:00', stops: 0, price: 2890, cabin: 'Business' },
  { id: 7, airline: 'Pegasus', flightNumber: 'PC 1190', from: 'Istanbul (SAW)', to: 'Berlin (BER)', departure: '2026-12-06T06:00:00', arrival: '2026-12-06T08:30:00', stops: 0, price: 145, cabin: 'Economy' },
  { id: 8, airline: 'KLM', flightNumber: 'KL 1614', from: 'Istanbul (IST)', to: 'Los Angeles (LAX)', departure: '2026-12-07T08:00:00', arrival: '2026-12-07T21:30:00', stops: 1, price: 1190, cabin: 'Economy' },
  { id: 9, airline: 'Singapore Airlines', flightNumber: 'SQ 322', from: 'London (LHR)', to: 'Singapore (SIN)', departure: '2026-12-08T11:35:00', arrival: '2026-12-09T07:10:00', stops: 0, price: 3650, cabin: 'Business' },
  { id: 10, airline: 'Iberia', flightNumber: 'IB 3171', from: 'Madrid (MAD)', to: 'Rome (FCO)', departure: '2026-12-09T15:10:00', arrival: '2026-12-09T17:40:00', stops: 0, price: 130, cabin: 'Economy' },
  { id: 11, airline: 'Etihad', flightNumber: 'EY 82', from: 'Istanbul (IST)', to: 'Sydney (SYD)', departure: '2026-12-10T10:20:00', arrival: '2026-12-11T20:55:00', stops: 2, price: 1720, cabin: 'Economy' },
  { id: 12, airline: 'Swiss', flightNumber: 'LX 1805', from: 'Zurich (ZRH)', to: 'Istanbul (IST)', departure: '2026-12-11T17:45:00', arrival: '2026-12-11T21:50:00', stops: 0, price: 960, cabin: 'Business' },
  { id: 13, airline: 'Aegean', flightNumber: 'A3 931', from: 'Istanbul (IST)', to: 'Athens (ATH)', departure: '2026-12-12T12:00:00', arrival: '2026-12-12T15:50:00', stops: 1, price: 210, cabin: 'Economy' },
]

export default flights
