export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  if (req.method === 'POST') {
    const { name, email, phone, inquiryType, bikeId, message } = req.body || {};
    if (!name || !email || !inquiryType || !message) {
      return res.status(400).json({ error: 'validation_error', message: 'Required fields missing' });
    }
    const inquiry = { id: Date.now(), name, email, phone: phone || null, inquiryType, bikeId: bikeId || null, message, createdAt: new Date().toISOString() };
    return res.status(201).json(inquiry);
  }
  res.status(405).json({ error: 'method_not_allowed', message: 'Only POST requests allowed' });
}
