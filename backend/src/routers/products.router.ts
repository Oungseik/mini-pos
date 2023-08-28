import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductsById,
  queryProducts
} from "../model/products.model";

const router = Router();

router.get("/", async (request, response) => {
  const { skip, take, search, category } = request.query;
  if (search && category) return response.json(await queryProducts({ title: search as string, category: category as string }));
  if (search && !category) return response.json(await queryProducts({ title: search as string }));
  if (!search && category) return response.json(await queryProducts({ category: category as string }));
  const result = await getProducts(Number(skip) || 0, Number(take) || 10);
  response.json(result);
});

router.get("/:id", async (request, response) => {
  const id = Number(request.params.id);
  const result = await getProductsById(id);
  if (!result) return response.status(404).end();
  response.json(result);
});

router.post("/", async (request, response) => {
  try {
    const product = await createProduct(request.body);
    response.status(201).json(product);
  } catch (err) {
    response.status(400).json({
      msg: "some property of the product is missing",
      mustInclude: ["title", "description", "price", "stock", "brand", "category", "thumbnail"],
    });
  }
});

export default router;
