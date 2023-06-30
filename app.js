const express = require("express");
const mongoose = require("mongoose");
const shorturl = require("./model/shorturl.js");
const app = express();
mongoose.connect('mongodb://0.0.0.0:27017/Urlshortener',{
  useNewUrlParser:true , useUnifiedtopology:true
})

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',async function(req,res){
 const shortURLS= await shorturl.find();

  res.render("home.ejs",{shortURLS:shortURLS});

})



app.post('/shorturls',async function(req,res){
  console.log(req.body.url);
  await shorturl.create({fullUrl:req.body.url});
  res.redirect('/');
//app.render
})

app.get('/:xyz',async  function(req,res){
  const id1=await shorturl.findOne({ShortUrl: req.params.xyz} );
  if(id1 ==  null ){ res.sendStatus(404)};
  const t3=id1.fullUrl;
  res.redirect(t3);

  id1.clicks++;
  id1.save();

})

const port = (process.env.PORT||5000);
app.listen(port);
console.log("port is listening to"+port);
