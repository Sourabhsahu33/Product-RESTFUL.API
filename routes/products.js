const express = require('express');

const router = express.Router();

const {getAllProducts, getAllProductsTesting,saveproducts} = require("../controllers/products")
router.route("/products").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.post("/saveproducts",saveproducts);
module.exports =  router;

