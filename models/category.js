const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "category name is send"],
        unique: true,
        trim: true,
        maxlength:[50, "max length 50 characters"],
    },
    description:{
        type:String,
        required:[true, "category  talbar is send"],
        maxlength:[50, "max length 50 characters"],
    },
    photo:{
        type:String,
      default:"no-photo.jpg",
      
    },
    averageRacing:{
        type:Number,
        min:[1,"reiting hamgiin baga 1"],
        max:[5,"reiting hamgiin ih 5"],
    },

});

module.exports = mongoose.model("category", CategorySchema);