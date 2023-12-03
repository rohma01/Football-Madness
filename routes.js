const express = require('express');
const User = require('./User');
const Player = require('./Player');
const bcrypt = require('bcrypt')
const router = express.Router();
let users = []
router.post('/register', async (req, res) => {
    try { 
        console.log("Player Entered")
        const { username, password } = req.body;

        if(password.length < 8){
            return res.status(400).json({ message: 'Password is too short! Please make it 8 characters long.' });
        }

        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });

        console.log("im here!");

        if (existingUser) {
            // Check if the inputted password differs from the existing user's password
            const passwordMatch = await existingUser.comparePassword(password);

            console.log(passwordMatch)
            //if passwords DONT match
            if (!passwordMatch) {
                console.log("taken already")
                //return res.status(400).json({ message: 'Username already taken/Incorrect password!' });
                 return res.status(400).json({ message: 'Username already taken' });
            } else {
                //sign in the user if they do match!
                console.log("Welcome back!")
                if (!users.includes(existingUser.username)){
                    users.push(existingUser.username)
                }
                console.log(users)
                return res.status(201).json({redirect:'/homepage.html', user: existingUser});
                // return res.status(201).json({ message: 'Welcome back existing user!' });


            }
            // Password matches, so allow registration with the same username
        } else {
            //create a new user since the given username does not exist
            console.log("created new user!")

            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            //const hashedPassword2 = await bcrypt.hash(password, 10); // Hash the password
            // console.log(hashedPassword)
            // console.log(hashedPassword2)
            
            const newUser = new User({ username: username, password: hashedPassword  });
            await newUser.save();
            if (!users.includes(existingUser.username)){
                users.push(existingUser.username)
            }
            console.log(users)
            
            //await newUser.save();
            
           
            // res.status(201).json({ message: 'User created successfully' });
            console.log("here")
            return res.status(201).json({redirect:'/homepage.html', user: newUser});
        }

        // If no existing user or password matches, create a new user
        
    } catch (error) {
        // res.status(500).json({ message: 'Error creating user' });
    }
});
router.get('/retrieveDraftedPlayers', async (req, res) => {
    //returns list of player names already in database
});
router.get('/retrieveUserTurn', async (req, res) => {
    //
});
router.post('/draft', async (req, res) => {
    try{
        const {user, playerName, position, rating, realLifeTeam, FBref_id }=req.body;
        console.log(user.username);
        console.log(position);
        let newUser = await User.findByIdAndUpdate(user._id, user, {
            new: true
        });
        console.log(position=="CM")
        const player = new Player({position: position, name: playerName, rating: rating, raelLifeTeam: realLifeTeam, FBref_id:  FBref_id})
        await player.save();
        if (position=="ST"){
            newUser.team.ST = player;
        }
        if (position=="RW"){
            newUser.team.RW = player;
        }
        if (position=="LW"){
            newUser.team.LW = player;
        }
        if (position=="CAM"){
            newUser.team.CAM = player;
        }
        if (position=="CM"){
            newUser.team.CM = player;
        }
        if (position=="CDM"){
            newUser.team.CDM = player;
        }
        if (position=="RB"){
            newUser.team.RB = player;
        }
        if (position=="LB"){
            newUser.team.LB = player;
        }
        if (position=="RCB"){
            newUser.team.RCB = player;
        }
        if (position=="LCB"){
            newUser.team.LCB = player;
        }
        if (position=="GK"){
            newUser.team.GK = player;
        }
        console.log(newUser.team.CM);
        await newUser.save();
        return res.status(201).json(newUser)
    } catch{
        return res.status(400).json({message: "Error updating team"})
    }
})

router.get('/search/player', async (req, res) => {
    try {
        const playerName = req.query.name; // Assuming the player name is passed as a query parameter
        const player = await Player.findOne({ name: playerName });
        
        if (player) {
            res.status(200).json(player);
        } else {
            res.status(404).json({ message: 'Player not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/search/user', async (req, res) => {
    try {
        const username = req.query.username; // Assuming the username is passed as a query parameter
        const user = await User.findOne({ username });
        
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = router
