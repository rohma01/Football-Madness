const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const User = require('./User');
const Player = require('./Player');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
let users = []
console.log("reached router")
router.use(bodyParser.json());
router.post('/registerr', async (req, res) => {
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
                    users.push(existingUser)
                }
            //    console.log(users)
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
                users.push(existingUser)
            }
            //console.log(users)
            
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
// router.get('/retrieveDraftedPlayers', async (req, res) => {
//     //returns list of player names already in database
//     //get user here
//     try{
//     let playersDrafted = []
//     playersDrafted.push(users[0].team.CM.name);
//     console.log(playersDrafted)
//     console.log(users.length);
//     // for (let i=0; i<users.length; i++){
//     //     let currUser = users[i];
//     //     //console.log(currUser.team.CM);
        
//     //     if (currUser.team.ST.name!==" "){
//     //         playersDrafted.push(currUser.team.ST.name);
//     //     }
//     //     if (currUser.team.RW.name!==" "){
//     //         playersDrafted.push(currUser.team.RW.name);
//     //     }
//     //     if (currUser.team.LW.name!==" "){
//     //         playersDrafted.push(currUser.team.LW.name);
//     //     }
//     //     if (currUser.team.CAM.name!==" "){
//     //         playersDrafted.push(currUser.team.CAM.name);
//     //     }
//     //     if (currUser.team.CM.name!==" "){
//     //         playersDrafted.push(currUser.team.CM.name);
//     //     }
//     //     if (currUser.team.CDM.name!==" "){
//     //         playersDrafted.push(currUser.team.CDM.name);
//     //     }
//     //     if (currUser.team.RB.name!==" "){
//     //         playersDrafted.push(currUser.team.RB.name);
//     //     }
//     //     if (currUser.team.LB.name!==" "){
//     //         playersDrafted.push(currUser.team.LB.name);
//     //     }
//     //     if (currUser.team.RCB.name!==" "){
//     //         playersDrafted.push(currUser.team.RCB.name);
//     //     }
//     //     if (currUser.team.LCB.name!==" "){
//     //         playersDrafted.push(currUser.team.LCB.name);
//     //     }
//     //     if (currUser.team.GK.name!==" "){
//     //         playersDrafted.push(currUser.team.GK.name);
//     //     }
           
//     // }
//     res.status(200).json({ playersDrafted });
// } catch (error) {
//     // Handle errors appropriately, e.g., send an error response
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
// }
// });
// router.get('/retrieveUserTurn', async (req, res) => {
//     //
// }); 
router.get('/draftGet', async (req, res) => {
    res.send("thing sent")
});

router.post('/weekIncrement', async (req, res) => {
    try{
    const user=req.body;

    console.log(user);
    console.log("week",user.week)
    let newUser = await User.findByIdAndUpdate(user._id, user, {
        new: false
    });
    newUser.week = newUser.week+1;
    console.log(newUser.week)
    
    //console.log(newUser)
    await newUser.save();
        return res.status(201).json(newUser)
    } 
    catch{
        return res.status(400).json({message: "Error updating team"})
    }
});


router.post('/userGet', async (req, res) => {
    try{
    const user=req.body;

   // console.log(user._id)
    let newUser = await User.findByIdAndUpdate(user._id, user, {
        new: false
    });
    
    //console.log(newUser)
    await newUser.save();
        return res.status(201).json(newUser)
    } 
    catch{
        return res.status(400).json({message: "Error updating team"})
    }
});
router.post('/draft', async (req, res) => {
    try{
        const {user, playerNameList, positionList, ratingList, realLifeTeamList, FBref_idList, fpointsList, roomID }=req.body;
        
        
        let newUser = await User.findByIdAndUpdate(user._id, user, {
            new: false
        });
        newUser.roomId = roomID
        //console.log(newUser)
        for (let i=  0; i<playerNameList.length; i++){
            
            playerName = playerNameList[i];
            position= positionList[i];
            rating = ratingList[i];
            realLifeTeam = realLifeTeamList[i];
            FBref_id = FBref_idList[i];
            fpoints= fpointsList[i];
        const player = new Player({position: position, name: playerName, rating: rating, raelLifeTeam: realLifeTeam, FBref_id:  FBref_id, fpoints: fpoints})
        await player.save();
        if (position=="ST"){
            newUser.team.ST = player;
           // console.log(user.username+" gets "+player.name);
        }
        if (position=="RW"){
            newUser.team.RW = player;
           // console.log(user.username+" gets "+player.name);
        }
        if (position=="LW"){
            newUser.team.LW = player;
            //console.log(user.username+" gets "+player.name);
        }
        if (position=="CAM"){
            newUser.team.CAM = player;
            //console.log(user.username+" gets "+player.name);
        }
        if (position=="CM"){
            newUser.team.CM = player;
           // console.log(user.username+" gets "+player.name);
        }
        if (position=="CDM"){
            newUser.team.CDM = player;
          //  console.log(user.username+" gets "+player.name);
        }
        if (position=="RB"){
            newUser.team.RB = player;
          //  console.log(user.username+" gets "+player.name);
        }
        if (position=="LB"){
            newUser.team.LB = player;
          //  console.log(user.username+" gets "+player.name);
        }
        if (position=="RCB"){
            newUser.team.RCB = player;
           // console.log(user.username+" gets "+player.name);
        }
        if (position=="LCB"){
            newUser.team.LCB = player;
          //  console.log(user.username+" gets "+player.name);
        }
        if (position=="GK"){
            newUser.team.GK = player;
          //  console.log(user.username+" gets "+player.name);
        }
    }

    //console.log(newUser.team);
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

router.post('/stats', async (req, res) => {
    try {
        const { FBref_id } = req.body;
        const url = `https://fbref.com/en/players/${FBref_id}/matchlogs/2022-2023/c9/Match-Logs`;
        let goals = "";
        let assists="";
        let shots = "";
        let touches = "";
        let tackles = "";
        let passComplete = "";
        let saves = "";
        let goalAgainst = "";
        

        try {
           // console.log("here1")
            const response = await axios.get(url);

            if (response.status === 200) {
                //console.log("here2")
                const html = response.data;
                // Use Cheerio to load the HTML content
                const $ = cheerio.load(html);
                // Step 2: Extract the goals from the relevant HTML element
                const goalsArray = $('td[data-stat="goals"]').map(function () {
                    return $(this).text().trim();
                }).get();
                goals = goalsArray.join(' ');

                
                const assArray = $('td[data-stat="assists"]').map(function () {
                    return $(this).text().trim();
                }).get();
                assists = assArray.join(' ');
                const shotsArray = $('td[data-stat="shots"]').map(function () {
                    return $(this).text().trim();
                }).get();
                shots = shotsArray.join(' ');
                const touchesArray = $('td[data-stat="touches"]').map(function () {
                    return $(this).text().trim();
                }).get();
                touches = touchesArray.join(' ');
                const tacklesArray = $('td[data-stat="tackles"]').map(function () {
                    return $(this).text().trim();
                }).get();
                tackles = tacklesArray.join(' ');
                const passCompArray = $('td[data-stat="passes"]').map(function () {
                    return $(this).text().trim();
                }).get();
                passComplete = passCompArray.join(' ');
                const savesArray = $('td[data-stat="gk_saves"]').map(function () {
                    return $(this).text().trim();
                }).get();
                saves = savesArray.join(' ');
                const goalsAgainstArray = $('td[data-stat="gk_goals_against"]').map(function () {
                    return $(this).text().trim();
                }).get();
                goalsAgainst = goalsAgainstArray.join(' ');

                //console.log(goals);
            } else {
                console.error(`HTTP GET request failed with status code ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching the web page:', error);
        }

        return res.status(201).json({goals,assists,shots,touches,tackles,passComplete,saves,goalsAgainst});
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error updating team" });
    }
});



module.exports = router
