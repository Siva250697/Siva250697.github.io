export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  const categories = [
    { id: 1, name: 'Scooters', slug: 'scooters', description: 'Electric scooters for city commuting', imageUrl: null },
    { id: 2, name: 'Motorcycles', slug: 'motorcycles', description: 'High-performance electric motorcycles', imageUrl: null },
    { id: 3, name: 'Mopeds', slug: 'mopeds', description: 'Lightweight electric mopeds', imageUrl: null },
    { id: 4, name: 'Sport Bikes', slug: 'sport-bikes', description: 'Electric sport bikes for enthusiasts', imageUrl: null }
  ];
  res.status(200).json(categories);
}
