const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const userRoutes = require('./routes.js');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const path = require('path');
// AnotherFile.js
const RoomManager = require('./roomManager');
const User = require('./User.js')
const Player= require('./Player.js')
let users = []

// MongoDB connection
mongoose.connect('mongodb+srv://rohma01:footballmadness@footballmadness.wkclor2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(userRoutes);
// User Schema


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
    const cookie = req.cookies
    req.io = io;
    return next();
  });

//   app.post('/storeDataOnServer', (req, res) => {
//     const userID = req.query.userID;
//     const sendData = JSON.parse(req.query.sendData);

//     // Store sendData in the session
//     req.session.sendData = sendData;

//     // Alternatively, you can store in userData if needed
//     // userData[userID] = sendData;

//     res.sendStatus(200);
// });

// app.get('/dashboard', (req, res) => {
//   const sendData = req.session.sendData; // Access stored sendData in the session
//   res.render('dashboard', { sendData });
// });
  // Define the path to your public folder
const publicPath = path.join(__dirname, '/images/');

// Set up the static middleware to serve files from the public folder
app.use(express.static(publicPath));

// app.use(async (req, res, next) => {
//   try {
//     // Assuming you have some way to identify the user, like a session or token
//     const username = req.session.username; // replace with your authentication mechanism

//     // Fetch user from the database using the /getUserByUsername route or your actual route
//     const response = await fetch(`/getUserByUsername?username=${username}`);
    
//     if (response.ok) {
//       const user = await response.json();
//       // Attach the user object to the request for further use in route handlers
//       req.user = user;
//     } else {
//       // Handle the case where fetching user fails
//       console.error('Error fetching user:', response.statusText);
//     }

//     next(); // Move to the next middleware or route handler
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     next(error); // Pass the error to the error handler
//   }
// });
// Serve socket.io script
app.get('/socket.io', (req, res) => {
  res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
});

app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
});

const activeRooms = {};
const MAX_USER_PER_ROOM = 4;
const roomManager = new RoomManager(MAX_USER_PER_ROOM);
const userRoomMap ={}
const userDetailsMap={}


io.on('connection', (socket) => {
  socket.on('setUsername', (userData) => {
    //console.log(`Setting username for socket ${socket.id} to ${userData.username}`)
    socket.username = userData.username;
    socket.userId = userData.userId;
    userDetailsMap[socket.userId] = {...userData,'setUsernameSocketid':socket.id};
  });

  socket.on('joinRoom', (roomId) => {
    console.log("roomId" + roomId);
    socket.join(roomId);
    socket.roomId = roomId;
    
    if (!activeRooms[roomId]) {
      activeRooms[roomId] = [];
    }

    activeRooms[roomId].push(socket.id);

    // Check if the room is full (MAX_USER_PER_ROOM users)
    if (activeRooms[roomId].length === MAX_USER_PER_ROOM) {
      // Notify all users in the room that the chat can start
      io.to(roomId).emit('roomReady');
    } else {
      // Notify the current user about waiting for more users
      socket.emit('waitingForQuorum');
    }
  });

  // Listen for chat messages
    socket.on('chatMessage', (message) => {    
      //og("QQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
      //console.log(message)
      //console.log(message.data[0])
      const actualMessage = JSON.parse(message.data);
     // console.log(actualMessage.draftteam[message.username]);
      io.to(socket.roomId).emit('chatMessage', message);

    });


  

    socket.on('messageFinal', (message) => {    
    //  console.log("MMMMMMMMMM")
      //console.log(message)
      //console.log(message.data[0])
      let username = message.username;
      let newUser = users[0]
      for (let i=0; i<users.length; i++){
        if (username == users[i]._id){
          newUser = users[i]
        }
      }
      const actualMessage = JSON.parse(message.data);
    //  console.log(username);
      for (let i =0; i<actualMessage.draftteam.teams.length; i++){
        let userIdCurr = actualMessage.draftteam.teams[i];
    //    console.log("---------------------")
      //  console.log("--------------")
     //   console.log(actualMessage.draftteam[userIdCurr]);
        actualMessage.draftteam[userIdCurr].forEach(async playerr =>{

        

        });
      }
      //io.to(socket.roomId).emit('chatMessage', message);

    });

  // Disconnect event
  socket.on('disconnect', () => {
    const roomId = socket.roomId;
    if (roomId && activeRooms[roomId]) {
      // Remove the disconnected user from the active room
      activeRooms[roomId] = activeRooms[roomId].filter(id => id !== socket.id);

      // Notify other users in the room about the disconnection
      io.to(roomId).emit('userDisconnected', socket.id);

      // If no users left in the room, dissolve the room
      if (activeRooms[roomId].length === 0) {
        delete activeRooms[roomId];
      }
    }
  });
});

// Set the view engine to handlebars
// Set your views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Find the user by username
    const user = await User.findOne({ username });
    console.log("aiowdbaoiwdbaiodwnaiodnaooooooooooooooooooooooooooooooooo")
    users.push(user);
    console.log(users);
  
    // Check if the user exists and the password is correct
    if (user && await bcrypt.compare(password, user.password)) {
      
      req.session.userId = user._id.toString();
      req.session.userName = user.username;
      roomManager.addUser(req.session.userId)
      // Emit the 'setUsername' event to the specific socket ID
      
      return res.redirect('/dashboard');
    }
  
    res.redirect('/');
  });

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/drafting', (req, res) => {

  const {room,roomId} = roomManager.getRoom(req.session.userId);
  const players = [
    {
        name: "Kevin DeBruyne",
        position: "CM",
        rating: 91,
        realLifeTeam: "Manchester City",
        FBref_id: "e46012d4"
    },
    {
        name: "Mohamed Salah",
        position: "RW",
        rating: 90,
        realLifeTeam: "Liverpool",
        FBref_id: "e342ad68"
        
    },
    {
        name: "Virgil Van Dijk",
        position: "RCB",
        rating: 90,
        realLifeTeam: "Liverpool",
        FBref_id: "e06683ca"
    },
    {
        name: "Cristiano Ronaldo",
        position: "ST",
        rating: 90,
        realLifeTeam: "Manchester United",
        FBref_id: "dea698d9"
    },
    {
        name: "Heung Min Son",
        position: "LW",
        rating: 89,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "92e7e919"
    },
    {
        name: "Casemiro",
        position: "CDM",
        rating: 89,
        realLifeTeam: "Manchester United",
        FBref_id: "4d224fe8"
    },
    {
        name: "Allison",
        position: "GK",
        rating: 89,
        realLifeTeam: "Liverpool",
        FBref_id: "7a2e46a8"
    },
    {
        name: "Harry Kane",
        position: "ST",
        rating: 89,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "21a66f6a"
    },
    {
        name: "Ederson",
        position: "GK",
        rating: 89,
        realLifeTeam: "Manchester City",
        FBref_id: "3bb7b8b4"
    },
    {
        name: "Ngolo Kante",
        position: "CDM",
        rating: 89,
        realLifeTeam: "Chelsea",
        FBref_id: "b9fbae28"
    },
    {
        name: "Erling Haaland",
        position: "ST",
        rating: 88,
        realLifeTeam: "Manchester City",
        FBref_id: "1f44ac21"
    },
    {
        name: "Joao Cancelo",
        position: "RB",
        rating: 88,
        realLifeTeam: "Manchester City",
        FBref_id: "bd6351cd"
    },
    {
        name: "Ruben Dias",
        position: "LCB",
        rating: 88,
        realLifeTeam: "Manchester City",
        FBref_id: "31c69ef1"
    },
    {
        name: "Bernardo Silva",
        position: "CAM",
        rating: 88,
        realLifeTeam: "Manchester City",
        FBref_id: "3eb22ec9"
    },
    {
        name: "Fabinho",
        position: "CDM",
        rating: 87,
        realLifeTeam: "Liverpool",
        FBref_id: "7f3b388c"
    },
    {
        name: "Rodri",
        position: "CDM",
        rating: 87,
        realLifeTeam: "Manchester City",
        FBref_id: "6434f10d"
    },
    {
        name: "Andrew Robertson",
        position: "LB",
        rating: 87,
        realLifeTeam: "Liverpool",
        FBref_id: "2e4f5f03"
    },
    {
        name: "Kalidou Koulibaly",
        position: "RCB",
        rating: 87,
        realLifeTeam: "Chelsea",
        FBref_id: "da974c7b"
    },
    {
        name: "Trent Alexander-Arnold",
        position: "LB",
        rating: 87,
        realLifeTeam: "Liverpool",
        FBref_id: "cd1acf9d"
    },
    {
        name: "Hugo Lloris",
        position: "GK",
        rating: 87,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "8f62b6ee"
    },
    {
        name: "De Gea",
        position: "GK",
        rating: 87,
        realLifeTeam: "Manchester United",
        FBref_id: "7ba6d84e"
    },
    {
        name: "Edouard Mendy",
        position: "GK",
        rating: 86,
        realLifeTeam: "Chelsea",
        FBref_id: "33887998"
    },
    {
        name: "Aymeric Laporte",
        position: "LCB",
        rating: 86,
        realLifeTeam: "Manchester City",
        FBref_id: "119b9a8e"
    },
    {
        name: "Raheem Sterling",
        position: "RW",
        rating: 86,
        realLifeTeam: "Chelsea",
        FBref_id: "b400bde0"
    },
    {
        name: "Riyad Mahrez",
        position: "LW",
        rating: 89,
        realLifeTeam: "Manchester City",
        FBref_id: "892d5bb1"    
    },
    {
        name: "Thiago",
        position: "CM",
        rating: 89,
        realLifeTeam: "Liverpool",
        FBref_id: "77e84962"
    },
    {
        name: "Thiago Silva",
        position: "RCB",
        rating: 86,
        realLifeTeam: "Chelsea",
        FBref_id: "86e7deaf"
    },
    {
        name: "Bruno Fernandes",
        position: "CAM",
        rating: 86,
        realLifeTeam: "Manchester United",
        FBref_id: "507c7bdf"
    },
    {
        name: "Ilkay Gundogan",
        position: "CM",
        rating: 85,
        realLifeTeam: "Manchester City",
        FBref_id: "819b3158"
    },
    {
        name: "Phil Foden",
        position: "RW",
        rating: 85,
        realLifeTeam: "Manchester City",
        FBref_id: "ed1e53f3"
    },
    {
        name: "Diogo Jota",
        position: "ST",
        rating: 85,
        realLifeTeam: "Liverpool",
        FBref_id: "178ae8f8"
    },
    {
        name: "Jorginho",
        position: "CM",
        rating: 85,
        realLifeTeam: "Chelsea",
        FBref_id: "45db685d"
    },
    {
        name: "Kyle Walker",
        position: "RB",
        rating: 85,
        realLifeTeam: "Manchester City",
        FBref_id: "86dd77d1"
    },
    {
        name: "Jamie Vardy",
        position: "ST",
        rating: 85,
        realLifeTeam: "Leicester City",
        FBref_id: "45963054"
    },
    {
        name: "Aubameyang",
        position: "ST",
        rating: 85,
        realLifeTeam: "Chelsea",
        FBref_id: "d5dd5f1f"
    },
    {
        name: "Martin Odegaard",
        position: "CAM",
        rating: 84,
        realLifeTeam: "Arsenal",
        FBref_id: "79300479"
    },
    {
        name: "Mason Mount",
        position: "CAM",
        rating: 84,
        realLifeTeam: "Chelsea",
        FBref_id: "9674002f"
    },
    {
        name: "Declan Rice",
        position: "CDM",
        rating: 84,
        realLifeTeam: "West Ham United",
        FBref_id: "1c7012b8"
    },
    {
        name: "Jack Grealish",
        position: "LW",
        rating: 84,
        realLifeTeam: "Manchester City",
        FBref_id: "b0b4fd3e"
    },
    {
        name: "Ivan Perisic",
        position: "LW",
        rating: 84,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "6fe90922"
    },
    {
        name: "Thomas Partey",
        position: "CDM",
        rating: 84,
        realLifeTeam: "Arsenal",
        FBref_id: "529f49ab"
    },
    {
        name: "Reece James",
        position: "LB",
        rating: 84,
        realLifeTeam: "Chelsea",
        FBref_id: "1265a93a"
    },
    {
        name: "Emiliano Martinez",
        position: "GK",
        rating: 84,
        realLifeTeam: "Aston Villa",
        FBref_id: "7956236f"
    },
    {
        name: "Mateo Kovacic",
        position: "CM",
        rating: 84,
        realLifeTeam: "Chelsea",
        FBref_id: "79c0821a"
    },
    {
        name: "Luis Diaz",
        position: "LW",
        rating: 84,
        realLifeTeam: "Liverpool",
        FBref_id: "4a1a9578"
    },
    {
        name: "Raphael Varane",
        position: "RCB",
        rating: 84,
        realLifeTeam: "Manchester United",
        FBref_id: "9f8e9423"
    },
    {
        name: "Youri Tielemans",
        position: "CM",
        rating: 84,
        realLifeTeam: "Leicester City",
        FBref_id: "56f7a928 "
    },
    {
        name: "Joel Matip",
        position: "LCB",
        rating: 84,
        realLifeTeam: "Liverpool",
        FBref_id: "b217ef29"
    },
    {
        name: "Wilfred Ndidi",
        position: "CDM",
        rating: 90,
        realLifeTeam: "Leicester City",
        FBref_id: "6b47c5db"
    },
    {
        name: "Kai Havertz",
        position: "CAM",
        rating: 84,
        realLifeTeam: "Chelsea",
        FBref_id: "fed7cb61"
    },
    {
        name: "Jadon Sancho",
        position: "RW",
        rating: 84,
        realLifeTeam: "Manchester United",
        FBref_id: "dbf053da"
    },
    {
        name: "Kieran Trippier",
        position: "RB",
        rating: 84,
        realLifeTeam: "Newcastle United",
        FBref_id: "21512407"
    },
    {
        name: "Roberto Firmino",
        position: "ST",
        rating: 83,
        realLifeTeam: "Liverpool",
        FBref_id: "4c370d81"
    },
    {
        name: "Jordan Henderson",
        position: "CM",
        rating: 83,
        realLifeTeam: "Liverpool",
        FBref_id: "935e6b8f"
    },
    {
        name: "John Stones",
        position: "LCB",
        rating: 83,
        realLifeTeam: "Manchester City",
        FBref_id: "5eecec3d"
    },
    {
        name: "Gabriel Jesus",
        position: "ST",
        rating: 83,
        realLifeTeam: "Arsenal",
        FBref_id: "b66315ae"
    },
    {
        name: "Hakim Ziyech",
        position: "RW",
        rating: 83,
        realLifeTeam: "Chelsea",
        FBref_id: "6622454d"
    },
    {
        name: "Ruben Neves",
        position: "CM",
        rating: 83,
        realLifeTeam: "Wolverhampton Wanderers",
        FBref_id: "44bfb6c5"
    },
    {
        name: "Pierre-Emile Hojbjerg",
        position: "CM",
        rating: 83,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "8b04d6c1"   
    },
    {
        name: "Ricardo Pereira",
        position: "RB",
        rating: 83,
        realLifeTeam: "Leicester City",
        FBref_id: "75a72a99"
    },
    {
        name: "Diego Carlos",
        position: "LCB",
        rating: 83,
        realLifeTeam: "Aston Villa",
        FBref_id: "b4a014b1"
    },
    {
        name: "Lucas Paqueta",
        position: "CAM",
        rating: 82,
        realLifeTeam: "West Ham United",
        FBref_id: "9b6f7fd5"
    },
    {
        name: "Wilfried Zaha",
        position: "LW",
        rating: 82,
        realLifeTeam: "Crystal Palace",
        FBref_id: "b2bc3b1f"
    },
    {
        name: "Lucas Digne",
        position: "LB",
        rating: 82,
        realLifeTeam: "Aston Villa",
        FBref_id: "1b84dbe1"
    },
    {
        name: "Ben Chilwell",
        position: "RB",
        rating: 82,
        realLifeTeam: "Chelsea",
        FBref_id: "d2424d1b"
    },
    {
        name: "Bukayo Saka",
        position: "RW",
        rating: 82,
        realLifeTeam: "Arsenal",
        FBref_id: "bc7dc64d"
    },
    {
        name: "Idrissa Gueye",
        position: "CDM",
        rating: 82,
        realLifeTeam: "Everton",
        FBref_id: "72c812f3"
    },
    {
        name: "Christian Romero",
        position: "RCB",
        rating: 83,
        realLifeTeam: "Tottenham Hotspur",
        FBref_id: "a3d94a58"
    },
    {
        name: "Azpilicueta",
        position: "RCB",
        rating: 82,
        realLifeTeam: "Chelsea",
        FBref_id: "53cad200"
    }
    
];
  draftteam={}
  for (r in room){
    draftteam['final_consence_'+room[r]]=false
    draftteam[room[r]]=[]
    
  }
  draftteam['teams']=room
  draftteam['draftingTurn']=room[0]

  const data={'roomId':roomId,
        'MAX_USER_PER_ROOM':MAX_USER_PER_ROOM,
        'draftData':{
            total_players_per_team: 11,
            players: players,
            draftteam: draftteam,
          }

        }
  if(roomId){
    res.render('drafting', { data: JSON.stringify(data) , roomId: roomId, teamId:req.session.userId, userData:req.session.user} );
  }else{
    res.render('temp');
  }
  
});
app.get('/matchup', (req, res) => {
  res.render('/matchup')
});
app.get('/getUserByUsername', (req, res) => {
  const { username } = req.query;

  const user = users.find(u => u.username === username);

  if (user) {
    res.json({user, users});
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
console.llog
  // Check if the username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.redirect('/register'); // You might want to display an error message here
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    password: hashedPassword,
    
  });


  // Save the user to the database
  await newUser.save();

  res.redirect('/login');
});

app.get('/dashboard', async (req, res) => {
  // Check if the user is logged in
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const user2 = await User.findById(req.session.userId);
    const user = { 'username': req.session.userName, 'userId': req.session.userId }
    req.io.emit('setUsername', user);
    res.render('dashboard', {  user});
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
    roomManager.removeUser(req.session.userId)
    req.session.destroy((err) => {
      res.redirect('/');
    });
  });
  
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });





























