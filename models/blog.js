const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Blog must have a title'],
  },
  body: {
    type: String,
    required: [true, 'There must be content in the body'],
  },
  category: {
    type: String,
    lowercase: true,
    enum: {
      values: ['technology', 'sports', 'music', 'cooking', 'other'],
      message: 'A Blog must have a category',
    },
  },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
