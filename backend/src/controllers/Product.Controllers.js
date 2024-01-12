const ProductModel = require('../models/Product.Model');
const ProductController = {
    getAllProduct: async (req, res) => {
     
      try {
        const data = await ProductModel.getAll();
        res.status(200).json({
          product: data,
        });
      } catch (error) {
        res.status(500).json({
          message: "lỗi server",
        });
      }
    },
  
    create: async (req, res) => {
      const { name, price, quantity, image, description, category_id } = req.body;
  
      const newProduct = {
        product_name: name,
        price,
        quantity,
        image,
        description_product: description,
        category_id,
      };
      try {
        await ProductModel.create(newProduct);
        res.status(201).json({
          message: "tạo mới sản phẩm thành công",
        });
      } catch (error) {
        res.status(500).json({
          message: "lỗi server",
        });
      }
    },
  
    getProductById: async (req, res) => {
      const { id } = req.params;
      console.log(id);
      try {
        const data = await ProductModel.getById(id);
        res.status(200).json({
          product: data,
        });
      } catch (error) {
        res.status(500).json({
          message: "lỗi server",
        });
      }
    },
  };
  
  module.exports = ProductController;