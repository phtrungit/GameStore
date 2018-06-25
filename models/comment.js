var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
	name:{type:String, require:true},
	content:{type:String, require:true},
	id_product:{type:String, require:true},
	date:{type:Date, require:true},
});
module.exports=mongoose.model('Comment',schema);