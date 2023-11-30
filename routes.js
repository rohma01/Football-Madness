const express = require('express');
const User = require('./User');
const bcrypt = require('bcrypt')
const router = express.Router();

const tokens = {
    
}

const app = express();
app.use(express.static('public'));

router.post('/register', async (req, res) => {
    try { 
        console.log("Player Entered")
        const { username, password } = req.body;

        if(password.length < 8){
            return res.status(400).json({ message: 'Password is too short! Please make it 8 characters long.' });
        }

        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            // Check if the inputted password differs from the existing user's password
            const passwordMatch = await existingUser.comparePassword(password);

            //if passwords DONT match
            if (!passwordMatch) {
                 return res.status(400).json({ message: 'Username already taken' });
            } else {
                //sign in the user if they do match!
                return res.status(201).json({redirect:'/homepage.html', user: existingUser});

            }
            // Password matches, so allow registration with the same username
        } else {
            //create a new user since the given username does not exist
            console.log("created new user!")

            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            const newUser = new User({ username: username, password: hashedPassword });
            await newUser.save();

            return res.status(201).json({redirect:'/homepage.html', user: newUser});
        }

        // If no existing user or password matches, create a new user
        
    } catch (error) {
        // res.status(500).json({ message: 'Error creating user' });
    }
});

router.post('/draft', async (req, res) => {
    try{
        let user = req.body.user;
        let newUser = await User.findByIdAndUpdate(user._id, user, {
            new: true
        });
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
