const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const playerSchema = new mongoose.Schema({
    position: String,
    name: String,
    rating: Number,
    totalPoints: {
      type: Number,
      default: 0,
    },
    averagePoints: {
      type: Number,
      default: 0,
    },
    realLifeTeam: String,
  });
  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    wins: {
      type: Number,
      min: 0,
      default: 0,
    },
    opponent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    winPercent: Number,
    team: {
      ST: playerSchema,
      W1: playerSchema,
      W2: playerSchema,
      CAM: playerSchema,
      CM: playerSchema,
      CDM: playerSchema,
      CB1: playerSchema,
      CB2: playerSchema,
      FB1: playerSchema,
      FB2: playerSchema,
      GK: playerSchema,
    },
  });


userSchema.methods.sayHi = function() {
    console.log(`Hi. My name is ${this.username}`)
}

// Add a method to the schema to compare passwords

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

userSchema.statics.findByName = function(username) {
    return this.find({username: new RegExp(username, "i")})
}

// userSchema.query.byName = function(name) {

// }

module.exports = mongoose.model("User", userSchema)

