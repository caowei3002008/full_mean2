var mongoose = require('mongoose');
var GoldSchema = mongoose.Schema({
    play_name: {type: String, required: true, default: "test1"},
    total_earn: {type: Number, required: true, default:0},
    logs: {type: Array, required: true,default: []}
},{timestamp: true});

module.exports = mongoose.model('Golds', GoldSchema);