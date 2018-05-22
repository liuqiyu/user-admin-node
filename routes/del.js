var express = require('express');
var router = express.Router();
var db = require('./../utils/dbutil');  // 封装的数据库

router.get('/', function(req, res, next) {
  //  删除的id
  var id = req.query.id;
  // 并非直接删除，而是将该用户改成不可用
  var  sql = 'UPDATE user SET STATUS = 0 where id in (' + id + ')';
  db.query(sql, function(err, rows, fields){
    if (err) {
      res.send({
        code: 500,
        status: 'error',
        message: '删除失败！'
        
      });
    } else {
      res.send({
        code: 200,
        status: 'success',
        message: '删除成功！',
      });
    }
  });
});

module.exports = router;
