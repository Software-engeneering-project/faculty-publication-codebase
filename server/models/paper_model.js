const mongoose = require('mongoose')

const Paper  = new mongoose.Schema(
    {
        area : {type : String, required : true},
        issuedby : {type : String, required : true},
        year:{type : String, required : true},
        citation:{type : String, required : true},
        patent:{type : String, required: true},
        privat:{type : String, required: true}
        // quote :{type : String}
    },
    // {collection : 'userdata'}
)

const model = mongoose.model('Paperdata',Paper)
module.exports = model


