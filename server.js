import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname since ESM doesn’t have it by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());

// 🔹 Serve static files (CSS, JS, images, data)
app.use(express.static(__dirname));

// 🔹 Serve amazon.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "amazon.html"));
});

let orders = [];

app.post("/order", (req, res) => {
  const { cart } = req.body;

  if (!Array.isArray(cart)) {
    return res.status(400).json({ error: 'Expected "cart" as an array.' });
  }

  const order = {
    id: uuidv4(),
    cart,
    status: "confirmed",
    createdAt: new Date().toISOString()
  };

  orders.push(order);
  res.json(order);
});

app.get("/order", (req, res) => {
  res.json(orders);
});

app.put("/order/:id", (req, res) => {
  const { id } = req.params;
  const order = orders.find(o => o.id === id);
  if (!order) return res.status(404).json({ error: "Order not found" });

  Object.assign(order, req.body);
  res.json(order);
});

app.delete("/order/:id", (req, res) => {
  orders = orders.filter(o => o.id !== req.params.id);
  res.json({ message: "Order deleted" });
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
