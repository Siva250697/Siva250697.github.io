export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  const categories = [
    { id: 4, name: 'Eko Tejas', slug: 'eko-tejas', description: 'Eko Tejas electric scooters and bikes', imageUrl: null },
    { id: 5, name: 'Venumotors', slug: 'venumotors', description: 'Venumotors electric scooters', imageUrl: null }
  ];
  res.status(200).json(categories);
}
