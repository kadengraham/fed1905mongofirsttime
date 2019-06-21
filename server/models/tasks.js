var mongoose = require('mongoose');

var Tasks = mongoose.model('MyTestingApp', {
    taskName: {
        type: String, 
        required:true, 
        minLength: 5,
        trim: true
    },

    completed: {
        type: Boolean, 
        default: false
    }
}, 'MyTestingApp');

module.exports = {Tasks}