const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.route('/').get().post();

router.get('/', async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.json(blog);
  } catch {
    console.log('not working');
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.send('Post created');
  } catch (e) {
    console.log(e);
    res.send('did not work');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    res.send('sucessfully deleted');
  } catch {
    console.log('could not do that');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const specificPost = await Blog.findById(id);
  res.json(specificPost);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, category } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(id, {
    title,
    body,
    category,
  });
  res.json(updatedBlog);
});

module.exports = router;
