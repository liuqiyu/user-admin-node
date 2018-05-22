var express = require('express');
var router = express.Router();
var db = require('./../utils/dbutil');

router.post('/', function(req, res, next) {
  
  var name = req.body.name;
  var gender = req.body.gender;
  var age = req.body.age;
  var province = req.body.province;
  var city = req.body.city;
  var area = req.body.area;
  var address = req.body.address;
  
  var  sql = "INSERT INTO `user` (`name`, `gender`, `age`, `province`, `city`, `area`, `address`) " +
    "VALUES " +
    "('" + name + "', '" + gender +"', '" + age +"', '" + province +"', '" + city +"', '" + area +"', '" + address +"')";
  db.query(sql, function(err, rows, fields){
    
    if (err) {
      res.send({
        code: 500,
        status: 'error',
        message: '添加失败！'
        
      });
    } else {
      res.send({
        code: 200,
        status: 'success',
        message: '添加成功！',
      });
    }
  });
});

module.exports = router;