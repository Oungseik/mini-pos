import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

export type Product = Prisma.ProductCreateInput;

async function createProduct({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  thumbnail,
  category,
}: Prisma.ProductCreateInput) {

  return await prisma.product.create({
    data: {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      thumbnail,
      category
    },
  });
}

async function getProducts(skip: number = 0, take: number = 10) {
  const total = await prisma.product.count();
  const products = await prisma.product.findMany({ skip, take })

  return {
    products,
    skip,
    take,
    total,
  }
}

async function getProductsById(id: number) {
  return await prisma.product.findUnique({ where: { id } })
}

async function queryProducts({ title, category }: { title?: string, category?: string }) {
  const products = category && title
    ? await prisma.product.findMany({ where: { title: { contains: title }, category: { contains: category } } })
    : title && !category
      ? await prisma.product.findMany({ where: { title: { contains: title } } })
      : await prisma.product.findMany({ where: { category: { contains: category } } })
  return { products }
}

export { createProduct, getProducts, getProductsById, queryProducts };
