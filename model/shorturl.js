const mongoose =require("mongoose");
const shortId= require("shortid");

const urlShortenerSchema= new mongoose.Schema({
  fullUrl:{
    type:String,
    required:true
  },
  ShortUrl:{
    type:String,
    default: shortId.generate
  },
  clicks:{
    type:Number,
    required:true,
    default:0
  }
})

module.exports = mongoose.model("shorturl",urlShortenerSchema);
