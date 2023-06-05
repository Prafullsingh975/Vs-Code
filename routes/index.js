var express = require("express");
var router = express.Router();
const fs = require("node:fs");
const path = require("path");
const readDirectoryRecursively = require('../public/javascripts/readDirectoryRecursively');

/* GET home page. */
router.get("/", function (req, res, next) {
  const folder = readDirectoryRecursively("./User Files");
  res.render('home',{folder,folderName:"",openFileName:''});
});

router.get('/openFile/*',(req,res,next)=>{
  // console.log(req.params[0]);
  const folder = readDirectoryRecursively("./User Files");
  const fileData = fs.readFileSync(`${req.params[0]}`,'utf-8');

  res.render('openFile',{fileData,folder,openFileName: path.basename(req.params[0]),folderName:folder.name,openFilePath:req.params[0]});
})

router.post('/save/*',(req,res,next)=>{
  console.log(req.body.data);
  const data = req.body.data;
  fs.writeFile(`${req.params[0]}`,`${data}`,(error)=>{
    try {
      res.redirect("back");
    } catch (error) {
      console.log(error);
    }
  })
})

module.exports = router;
