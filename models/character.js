const mongoose = require('mongoose');


const characterSchema = mongoose.Schema({
    name: String,
    age: Number
})


module.exports = mongoose.model('Character', characterSchema);