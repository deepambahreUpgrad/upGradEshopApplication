const router = require("express").Router();
const auth = require("../middleware/auth");
const productCtrl = require("../controllers/productCtrl");

router
  .route("/") //Here auth ensures that authentication is necessary before tampering with the products stuff
  .get(auth, productCtrl.getProducts) //Get route to get all the products on home page
  .post(auth, productCtrl.createProduct); //Post route to create a product

router //Routes responsible for only tampering with a single product based on it's unique id.
  .route("/:id")
  .get(auth, productCtrl.getProduct)
  .put(auth, productCtrl.updateProduct)
  .delete(auth, productCtrl.deleteProduct);

module.exports = router;
