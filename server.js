import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/order', (req, res) => {
  const { cart } = req.body;

  if (!Array.isArray(cart)) {
    return res.status(400).json({ error: 'Expected "cart" as an array.' });
  }

  const order = {
    id: uuidv4(),
    cart,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  res.json(order);
});

app.listen(PORT, () =>
  console.log(`Order service running at http://localhost:${PORT}/order`)
);
