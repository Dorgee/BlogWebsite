const express = require('express');
const app = express();
const port = 3001;
const blogRoute = require('./routes/blog');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.use('/blog', blogRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
