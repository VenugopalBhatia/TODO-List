const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    // check:{
    //     type:Boolean
    // },

    description:{
        type: String,
        required:true
    },
    category:{
        type: String
    },
    deadline:{
        type:Date
    }
})

const Tasklist = mongoose.model('Tasklist',choreSchema);

module.exports = Tasklist;