const mongoose = require("mongoose")
const User = require('./User')

const matchupSchema = new mongoose.Schema({
    user1: User.schema,
    user2: User.schema,
})

module.exports = mongoose.model("Matchup", matchupSchema);
