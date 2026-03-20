import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import productRoutes from "./routes/product.routes.js";


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      category: true
    }
  });
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});

