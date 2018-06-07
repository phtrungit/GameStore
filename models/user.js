var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');
var schema=new Schema({
	imagePath:{type:String, require:true},
	name:{type:String, require:true},
	mail:{type:String, require:true},
	username:{type:String, require:true},
	password:{type:String, require:true},
	isAdmin: { type: Boolean},
	phone:{type: String, default:''},
	isActivated:{type:Boolean, default:false}
});
schema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
};

schema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);  
};
module.exports=mongoose.model('User',schema);