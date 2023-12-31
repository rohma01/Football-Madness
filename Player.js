const mongoose = require("mongoose")
const playerSchema = new mongoose.Schema({
    position: {
        type: String,
        default: " ",
    },
    name: {
        type: String,
        default: " ",
    },
    rating: {
        type: Number,
        default: 0,
      },
    realLifeTeam: {
        type: String,
        default: " ",
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
    FBref_id: {
      type: String,
      default: "",
    },
    fpoints: {
      type: String,
      default: "",
    }
    
})

module.exports = mongoose.model("Player", playerSchema);
