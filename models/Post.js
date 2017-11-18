var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title : {type : String, required : true},
    headUrl : {type : String, required : true},
    content : {type : String, required : true},
    category : {type : String, required : true},
    aurthor : {type : String, required : true},
    date : {type : Date, required : true}
});

module.exports = mongoose.model('post', postSchema);