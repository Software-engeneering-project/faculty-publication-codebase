const mongoose = require('mongoose')

const Paper  = new mongoose.Schema(
    {
        email : {type : String, required : true},
        area : {type : String, required : true},
        issuedby : {type : String, required : true},
        year:{type : String, required : true},
        citation:{type : String, required : true},
        patent:{type : String, required: true},
        privat:{type : String, required: true},
        DOI :{type : String, required:true,unique : true},
        typep : {type : String, required : true},
        paperlink : {type : String, required : true},
        ptitle : {type : String, required : true},
        abstract : {type : String, required : true},
        author : {type : String, required : true}


        // quote :{type : String}
    },
    // {collection : 'userdata'}
)

const model = mongoose.model('Paperdata',Paper)
module.exports = model


