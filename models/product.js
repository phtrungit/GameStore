var mongoose=require('mongoose');
var nl2br  = require('nl2br');
var Schema=mongoose.Schema;
var schema=new Schema({
	imagePath:{type:String, require:true},
	title:{type:String, require:true},
	description:{type:String, require:true},
	price:{type:Number, require:true},
	category:{type:String,require:true},
	amount:{type:Number,require:true},
	status:{type:String,require:true}
});
schema
.virtual('url')
.get(function () {
  return '/'+this._id
});

schema
.virtual('price_string')
.get(function () {
  return this.price.toLocaleString();
});

schema
.virtual('description_html')
.get(function () {
  return nl2br(this.description,false);
});
module.exports=mongoose.model('Product',schema);
