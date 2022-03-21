const mongoose = require('mongoose')

const Userscheema = new mongoose.Schema(
    {
        name : {type : String, required : true},
        email : {type : String, required : true,unique : true},
        password:{type : String, required : true},
        // quote :{type : String}
    },
    // {collection : 'userdata'}
)

 const model = mongoose.model('User',Userscheema)

module.exports = model