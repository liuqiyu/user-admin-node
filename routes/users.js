var express = require('express');
var router = express.Router();
var db = require('./../utils/dbutil');

router.get('/', function(req, res, next) {
  var start;
  var end;
  var count = 20;
  var name;
  var gender;
  if (req.query.page) {
    start = (req.query.page - 1) * count;
    end = (req.query.page) * count;
  } else {
    start = 0;
    end = 19;
  }
  req.query.name ? name = req.query.name : name = '';
  req.query.gender ? gender = req.query.gender : gender = '';
  var sql = "SELECT * FROM user where status = 1 and name like '%" + name + "%' and gender like '%" + gender + "%'";
  db.query(sql, function(err, rows, fields){
    if (err) {
      console.log(err);
      res.send({
        code: 500,
        status: 'error',
        data: [],
      });
      return;
    }
    res.send({
      code: 200,
      status: 'success',
      data: {
        list: rows.slice(start, end),
        total: rows.length,
      },
    });
  });
});

module.exports = router;
