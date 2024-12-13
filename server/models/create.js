const mongoose = require('mongoose');


const CreateSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    source : {
        type : String,
        required : true,
    },
    destination : {
        type : String,
        required : true
    }, 
    

});

const Create = mongoose.model('Create', CreateSchema);
module.exports = Create;