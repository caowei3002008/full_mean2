let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let TaskSchema = new Schema({
    title: {type: String},
    description: {type: String},

});

module.exports = mongoose.model('Tasks', TaskSchema);