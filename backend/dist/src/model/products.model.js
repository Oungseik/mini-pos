"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryProducts = exports.getProductsById = exports.getProducts = exports.createProduct = void 0;
const prisma_1 = require("../lib/prisma");
function createProduct({ title, description, price, discountPercentage, rating, stock, brand, thumbnail, category, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.product.create({
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
    });
}
exports.createProduct = createProduct;
function getProducts(skip = 0, take = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        const total = yield prisma_1.prisma.product.count();
        const products = yield prisma_1.prisma.product.findMany({ skip, take });
        return {
            products,
            skip,
            take,
            total,
        };
    });
}
exports.getProducts = getProducts;
function getProductsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma_1.prisma.product.findUnique({ where: { id } });
    });
}
exports.getProductsById = getProductsById;
function queryProducts({ title, category }) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = category && title
            ? yield prisma_1.prisma.product.findMany({ where: { title: { contains: title }, category: { contains: category } } })
            : title && !category
                ? yield prisma_1.prisma.product.findMany({ where: { title: { contains: title } } })
                : yield prisma_1.prisma.product.findMany({ where: { category: { contains: category } } });
        return { products };
    });
}
exports.queryProducts = queryProducts;
