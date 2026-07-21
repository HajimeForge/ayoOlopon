const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

const players = [];

//Create Function
app.post("/createplayers", (req, res) => {
  const { name } = req.body;

  const newPlayer = {
    id: players.length + 1,
    name,
    score: 0,
    capturedSeeds: 0,
  };

  players.push(newPlayer);

  res.status(201).json({
    message: "Player created successfully",
    player: newPlayer,
  });
});






//Get All






//Get on by Id and phone









//Update





//Delete

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});