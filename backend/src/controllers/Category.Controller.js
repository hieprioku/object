const CategoryModel = require("../models/Category.Model");
const CategoryController = {
    create: async (req, res) => {
      const { name } = req.body;
      
      console.log("name", name);
      try {
        await CategoryModel.create(name);
        res.status(201).json({
          message: "tạo mới thành công",
        });
      } catch (error) {
        res.status(500).json({
          message: "lỗi server",
        });
      }
    },
  };
  
  module.exports = CategoryController;