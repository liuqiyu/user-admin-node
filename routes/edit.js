var express = require('express');
var router = express.Router();
var db = require('./../utils/dbutil');

router.post('/', function(req, res, next) {
  
  var id = req.body.id;
  var name = req.body.name;
  var gender = req.body.gender;
  var age = req.body.age;
  var province = req.body.province;
  var city = req.body.city;
  var area = req.body.area;
  var address = req.body.address;
  console.log(req.body);
  
  // var sql = "UPDATE user SET name='" + name +"' WHERE id = " + id;
  var sql = "UPDATE user SET name='" + name +"' , gender =" + gender + " , age =" + age + " , province ='" + province + "' , city ='" + city + "' , area ='" + area + "' , address ='" + address + "' WHERE id = " + id;
  db.query(sql, function(err, rows, fields){
    if (err) {
      console.log(err);
      res.send({
        code: 500,
        status: 'error',
        message: '修改失败',
      });
      return;
    }
    res.send({
      code: 200,
      status: 'success',
      message: '修改成功',
    });
  });
});

module.exports = router;
