var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',function(req, res, next) 
{
  if(req.session.adminid)
  {           
    con.query("select * from myequipment where status=1 ",req.session.adminid,function(err,myequipmentresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      // else if(result.length==0)
      // {
      //   res.json({"success":true,'msg':'Data Not Available'});
      // }
      else
      {
        res.json({"success":true,'msg':'all myequipment list ','myequipmentdata':myequipmentresult});    
      }      
    });     
  }
  else
  {     
    res.json({"success":true,'msg':'admin login page'});
  }      
});


module.exports = router;