const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Movie= new Schema(
    {
        name : {type: String, required: true},
        time : {time: String, required: true},
        rating : {rating: String, required: true},
    },
    { timestamps: true }

);
module.exports = mongoose.model('movies', Movie);

