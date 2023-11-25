const express = require('express');
const User = require('./User');
const bcrypt = require('bcrypt')
const router = express.Router();
router.post('/register', async (req, res) => {
    try { 
        const { username, password } = req.body;

        if(password.length < 8){
            return res.status(400).json({ message: 'Password is too short!' });
        }

        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });

        console.log("im here!")

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
                return res.status(201).json({redirect:'/homepage.html'});
                // return res.status(201).json({ message: 'Welcome back existing user!' });


            }
            // Password matches, so allow registration with the same username
        } else {
            //create a new user since the given username does not exist
            console.log("created new user!")

            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            const hashedPassword2 = await bcrypt.hash(password, 10); // Hash the password
            console.log(hashedPassword)
            console.log(hashedPassword2)
            const newUser = new User({ username: username, password: hashedPassword });
            await newUser.save();
            // res.status(201).json({ message: 'User created successfully' });
            return res.status(201).json({redirect:'/homepage.html'});
        }

        // If no existing user or password matches, create a new user
        
    } catch (error) {
        // res.status(500).json({ message: 'Error creating user' });
    }
});

module.exports = router