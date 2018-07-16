let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CakeSchema = new Schema({
    name: {type: String, require: true},
    imageUrl:{type: String, require: true},
    // rate: {type:Number, require: false, default:0},
    // comment: {type: String, require:false}
    rate_comment:{type:Array, default: []}

})

module.exports = mongoose.model('Cakes', CakeSchema);