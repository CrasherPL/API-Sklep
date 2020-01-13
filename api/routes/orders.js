const express = require("express");
const router = express.Router();

router.get("/",(req, res, next) => {
    res.status(200).json({message: "Lista wszystkich zamówień"});
});
router.post("/",(req, res, next) => {
    res.status(200).json({message: "Dodano nowe zamówienie"});
});

router.get("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({message: "Informacje na temat zamówienia nr " + id});
});
router.patch("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({message: "Zmiana zamówienia o nr " + id});
});
router.delete("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({message: "Usunięcie zamówienia nr " + id});
});

module.exports = router;