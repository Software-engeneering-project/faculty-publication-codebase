

const mongoose = require('mongoose');


const Savedscheema = new mongoose.Schema(
    {
        email : {type : String, required : true,unique : true},
        doi  : {type : [String], required : true},
    },
)

const model = mongoose.model('SavedPaper',Savedscheema)
module.exports = model


