const mongoose = require ('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    file: String, 
    ingredients: String,
    makingTime: String,
    user: String
})

const PostModel = mongoose.model('posts', PostSchema)

module.exports = PostModel;