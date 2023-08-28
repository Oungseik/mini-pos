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
const jwt_1 = require("../lib/jwt");
const router = (0, express_1.Router)();
router.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    if (!(email && password))
        return response.status(400).json({ msg: "Please provide email and password" });
    const token = (0, jwt_1.createToken)({ email, password });
    response.json({ token });
}));
exports.default = router;
