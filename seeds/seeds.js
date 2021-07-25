const mongoose = require('mongoose');
const Blog = require('../models/blog');
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const newBlog = new Blog({
  title: 'How to shoot a 3 pointer',
  body: 'to shoot a 3 pointer you have to bend you knees and release at a high arc',
  category: 'Sports',
});

console.log(newBlog.category);

newBlog
  .save()
  .then(() => {
    console.log(newBlog);
  })
  .catch((e) => {
    console.log(newBlog.category);
    console.log(e);
  });
