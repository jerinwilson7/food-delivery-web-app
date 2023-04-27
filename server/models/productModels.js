const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new  Schema (
    {
        name: {type: String, required:true}
    }    
)

const ProductSchema = new Schema (
    {
        name:{type:String,requires:true},
        adjective:{type:String,requires:true},
        description:{type:String,requires:true},
        price:{type:String,requires:true},
        category:{type:String,requires:true},

    }
)

module.exports=mongoose.model('products',ProductSchema);
