const { Router } = require("express");
const { listcart, addcart, listcarts, removecart, getOne, update } = require("../controllers/card");

const router = Router()

router.get("/cart", listcart)
router.post("/cart", addcart)
router.get("/cart/:user", listcarts)
router.get("/cart/getItem/:id", getOne);
router.delete("/cart/:id", removecart)
router.put("/cart/:id", update);

export default router;