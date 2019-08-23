const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    name: String,
    nickname: String,
    email: String,
    username: String,
    profile_picture: String,
    auth0_id: String,
    isAdmin: Boolean
})

module.exports = mongoose.model('User', user)