const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes.js');
const bcrypt = require('bcrypt')
const http = require('http');
const session = require('express-session');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
//hi
app.use(express.json());
let draftStatus = "notStarted";
// Connect to MongoDB
mongoose.connect("mongodb+srv://rohma01:footballmadness@footballmadness.wkclor2.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(userRoutes); // Use routes
let userCount=0;



// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
  
    socket.on('joinRoom', (roomName) => {
      userCount++;
      roomName = Math.ceil(userCount/4)
      socket.join(roomName);
      console.log(`User ${socket.id} joined room ${roomName}`);
    });
  
    // Handle other events
  });

  const PORT = process.env.PORT || 3000; //
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




//asdasdasd

// app.js (continued)

const Player = require('./Player');

app.get('/draft', async (req, res) => {
    try {
        const players = await initializePlayerPool();
        res.render('draft', { players });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/draft/pick', async (req, res) => {
    try {
        const { playerId, userId } = req.body;
        const player = await Player.findById(playerId);
        
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        const user = await User.findById(userId);
        // Add logic to check if the user can pick the player (e.g., turn order, position constraints)

        // Update the user's team with the drafted player
        const position = player.position; // Assuming the player schema has a "position" field
        user.team[position] = player;

        // Save the updated user
        await user.save();

        // Remove the drafted player from the player pool
        await Player.findByIdAndRemove(playerId);

        res.status(200).json({ message: 'Player drafted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});





