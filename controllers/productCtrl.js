const Products = require("../models/productModel");

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find({ user_id: req.user.id });
      res.json(products);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const { title, description, price, cetegory, quantity } = req.body;
      const newProduct = new Products({
        title,
        description,
        price,
        cetegory,
        quantity,
        user_id: req.user.id,
        name: req.user.name,
      });
      const result = await newProduct.save();
      if(!result){
        res.json({ msg: "Product is not created" });
      }
      res.json({ msg: "Created a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      //cloudinary.uploader.destroy(product.public_id, { invalidate: true, resource_type: "image" });
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { title, description, price, cetegory, quantity } = req.body;
      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          description,
          price,
          cetegory,
          quantity
        }
      );
      res.json({ msg: "Updated a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
