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
const express_1 = require("express");
const products_model_1 = require("../model/products.model");
const router = (0, express_1.Router)();
router.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, take, search, category } = request.query;
    if (search && category)
        return response.json(yield (0, products_model_1.queryProducts)({ title: search, category: category }));
    if (search && !category)
        return response.json(yield (0, products_model_1.queryProducts)({ title: search }));
    if (!search && category)
        return response.json(yield (0, products_model_1.queryProducts)({ category: category }));
    const result = yield (0, products_model_1.getProducts)(Number(skip) || 0, Number(take) || 10);
    response.json(result);
}));
router.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(request.params.id);
    const result = yield (0, products_model_1.getProductsById)(id);
    if (!result)
        return response.status(404).end();
    response.json(result);
}));
router.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, products_model_1.createProduct)(request.body);
        response.status(204).json(product);
    }
    catch (err) {
        response.status(400).json({
            msg: "some property of the product is missing",
            mustInclude: ["title", "description", "price", "stock", "brand", "category", "thumbnail"],
        });
    }
}));
exports.default = router;
