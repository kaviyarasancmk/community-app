const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/sampledata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model('User', UserSchema);

app.use(express.json());

app.post('/getusers', async (req, res) => {
  try {
    const { name, age } = req.body; // Changed from 'email' to 'age' to match the schema.

    const user = new UserModel({ name, age });

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get('/getusers', (req, res) => {
  UserModel.find({}).then(function (users) {
    res.json(users);
  }).catch(function (err) {
    console.error('UserModel.find error:', err);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
