const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const Character = require('./models/character');

mongoose.connect('mongodb://localhost:27017/API_Practice', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db connected')
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.send("Hello")
})

app.get('/characters', async (req, res) => {
    const characters = await Character.find({});
    res.send(characters)
})

app.post('/characters', async (req, res) => {
    const character = new Character(req.body);
    await character.save()
    res.send(character)
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})