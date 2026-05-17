const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3001;

class User {
    constructor(name, points) {
        this.name = name;
        this.points = points;
    }
}

const names = ["Anthony", "Benedict", "Colin", "Daphne", "Eloise", "Francesca", "Gregory", "Hyacinth"];
const users = [];

names.forEach(name => {
    users.push(new User(name, Math.round(Math.random()*100)));
});

app.get('/leaderboard', (req, res) => {
  users.sort((a, b) => b.points - a.points);
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});