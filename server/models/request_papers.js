

const mongoose = require('mongoose');


const requestpaperschemma = new mongoose.Schema(
    {
        email : {type : String, required : true},
        DOI : {type : String, required : true},
        reason : {type : String, required : true}
        // quote :{type : String}
    },
    // {collection : 'userdata'}
)



const model = mongoose.model('Requestpaper',requestpaperschemma)
module.exports = model