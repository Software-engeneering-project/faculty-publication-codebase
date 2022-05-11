

const mongoose = require('mongoose');


const Recentlyscheema = new mongoose.Schema(
    {
        email : {type : String, required : true,unique : true},
        doi  : {type : [String], required : true},
        // user_type:{type : String, required: true},
        // quote :{type : String}
    },
    // {collection : 'userdata'}
)

const model = mongoose.model('RecAdded',Recentlyscheema)
module.exports = model