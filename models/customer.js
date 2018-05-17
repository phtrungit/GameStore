var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
	imagePath:{type:String, require:true},
	name:{type:String, require:true},
	mail:{type:String, require:true},
	phone:{type:String, require:true}
});

module.exports=mongoose.model('Customer,schema');