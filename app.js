const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes.js');
const bcrypt = require('bcrypt')


const users = {
    "User 1" : new User(),
    "User 2" : new User()
}

const app = express();
//hi
app.use(express.json());
let draftStatus = "notStarted";
// Connect to MongoDB
mongoose.connect("mongodb+srv://rohma01:footballmadness@footballmadness.wkclor2.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(userRoutes); // Use routes

const PORT = process.env.PORT || 3000; //
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});




//asdasdasd




