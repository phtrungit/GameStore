var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    cart:{type:Array, require:true},
    customer:{type:Schema.ObjectId, ref:'User'},
    customer_name:{type:String},
    status:{type:String},
    deliver:{type:String},
    TotalQty:{type:Number,require:true},
    TotalPrice:{type:Number,require:true},
    date:{type:Date,require:true}
});
schema
    .virtual('date_string')
    .get(function () {
        return this.date.getDate()+'/'+(this.date.getMonth()+1)+'/'+this.date.getFullYear();
    });
schema
    .virtual('hhmmss')
    .get(function () {
        return this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
    });
schema
    .virtual('TotalPrice_s')
    .get(function () {
        return this.TotalPrice.toLocaleString();
    });
module.exports=mongoose.model('Order',schema);