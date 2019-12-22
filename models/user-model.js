const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    username: String,
    score: Number,
    completed: Number,
})

const User = mongoose.model("User", userSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'books'


module.exports = User;