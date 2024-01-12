const db = require('mysql2');

const connection = db.createConnection( {
    dialect: 'mysql',
    host: 'localhost',
    database: 'project_md3',
    password: 'xitin123',
    port: 3306
});

connection.connect((err) => {
  if (err) {
    console.log("lỗi kết nối với mysql");
    return err;
  }
  console.log("kết nối thành công");
});
module.exports = connection;