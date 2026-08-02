const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    cuisine:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    area:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        default:0
    },

    priceRange:{
        type:Number,
        default:500
    },

    image:{
        type:String
    },

    phone:{
        type:String
    },

    hours:{
        type:String
    },

    description:{
        type:String
    },

    location:{
        type:{
            type:String,
            default:"Point"
        },
        coordinates:{
            type:[Number],
            default:[0,0]
        }
    }

});

restaurantSchema.index({
    location:"2dsphere"
});

module.exports=mongoose.model(
    "Restaurant",
    restaurantSchema
);