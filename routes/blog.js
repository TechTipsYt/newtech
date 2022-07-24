var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    let blogs=[ 
 {
   title:'Hi',
   image:'https://alanmajchrowicz.com/wp-content/uploads/2019/01/glacier_peak_image_lake_58240.jpg',
   link:''
 },
 {
    title:'Hello',
    image:'https://alanmajchrowicz.com/wp-content/uploads/2019/01/glacier_peak_image_lake_58240.jpg',
    link:''
  }
]
  res.render('soon', {blogs}); 
});


module.exports = router; 