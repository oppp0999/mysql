var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'nodejs',
  password:'11111111',
  database:'opentutorials'
});//connection의 값을 담고있다.
db.connect();
module.exports = db;