const connection = require('../database/db.js');

const CategoryModel = {
    create: (name) => {
        return new Promise((resolve, reject) => {
          connection.query(
            "INSERT INTO categories SET ?",
            { category_name: name },
            (err, result) => {
              if (err) {
                reject(err);
              }
              resolve(result);
            }
          );
        });
      },
    };
    
    module.exports = CategoryModel;