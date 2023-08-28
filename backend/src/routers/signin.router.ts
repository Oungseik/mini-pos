import { Router } from "express";
import { createToken } from "../lib/jwt";

const router = Router();

router.post("/", async (request, response) => {
  const { email, password } = request.body;
  if (!(email && password)) return response.status(400).json({ msg: "Please provide email and password" })
  const token = createToken({ email, password });
  response.json({ token });
})

export default router;
