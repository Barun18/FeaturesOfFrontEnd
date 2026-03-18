import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});