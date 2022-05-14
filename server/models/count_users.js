

const mongoose = require('mongoose');


const count_userscheema = new mongoose.Schema(
    {
        count : {type : Number, required : true},
        admin : {type : String,required : true,unique : true},
    },
)

const model = mongoose.model('count_user',count_userscheema)
module.exports = model