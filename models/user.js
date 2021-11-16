const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({

    name: 
    {
        type: String,
        require: true
    },

    age: Number,

    favoriteFoods: [String],

    vegetarian: Boolean,

    country: 
    {
        type: String,
        default: "France"
    }

})

module.exports=mongoose.model("User",user)
