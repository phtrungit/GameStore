var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
	name:{type:String, require:true},
	content:{type:String, require:true},
	id_product:{type:String, require:true},
	date:{type:Date, require:true},
});
schema
    .virtual('date_string')
    .get(function () {
        return new Date(this.date).toUTCString();
    });
schema
    .virtual('hhmmss')
    .get(function () {
        return this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
    });
module.exports=mongoose.model('Comment',schema);