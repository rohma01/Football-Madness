const mongoose=require('mongoose');
const usersSchema = new mongoose.Schema({
    userName: String,
    password: String
});

const User = new mongoose.model("User", usersSchema);
module.exports=User;