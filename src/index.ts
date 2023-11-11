import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 8888;

app.use(express.json());

// Rotas CRUD Category
// Read
app.get("/category", async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

// Create
app.post("/category", async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  res.json(category);
});

// Update
app.put("/category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.category.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
    },
  });
  res.json(category);
});

// Delete
app.delete("/category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.category.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(category);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//CRUD Dish
// Read
app.get("/dish", async (req: Request, res: Response) => {
  const dish = await prisma.dish.findMany();
  res.json(dish);
});

// Create
app.post("/dish", async (req: Request, res: Response) => {
  const { name, price, category_id, date } = req.body;
  const dish = await prisma.dish.create({
    data: {
      name,
      price,
      categoryId: category_id,
      date: date
    },
  });
  res.json(dish);
});

// Update
app.put("/dish/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, category_id, date } = req.body;
  const dish = await prisma.dish.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      price,
      categoryId: category_id,
      date: date
    },
  });
  res.json(dish);
});

// Delete
app.delete("/dish/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const dish = await prisma.dish.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(dish);
});

//Crud Revenue
// Read
app.get("/revenue", async (req: Request, res: Response) => {
  const revenue = await prisma.revenue.findMany();
  res.json(revenue);
});

// Create
app.post("/revenue", async (req: Request, res: Response) => {
  const { name, price, category_id, date } = req.body;
  const revenue = await prisma.revenue.create({
    data: {
      name,
      price,
      categoryId: category_id,
      date: date
    },
  });
  res.json(revenue);
});

// Update
app.put("/revenue/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, category_id, date } = req.body;
  const revenue = await prisma.revenue.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      price,
      categoryId: category_id,
      date: date
    },
  });
  res.json(revenue);
});

// Delete
app.delete("/revenue/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const revenue = await prisma.revenue.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(revenue);
});
