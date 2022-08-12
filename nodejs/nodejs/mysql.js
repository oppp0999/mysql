var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : '11111111',
  database : 'opentutorials'
});
 
connection.connect(); //위 변수가 컨넥션에 담김
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error){
    console.log(error);
  }
  console.log(results);
});
 
connection.end();