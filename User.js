const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const Player = require('./Player')

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
      ST: Player.schema,
      RW: Player.schema,
      LW: Player.schema,
      CAM: Player.schema,
      CM: Player.schema,
      CDM: Player.schema,
      RCB: Player.schema,
      LCB: Player.schema,
      RB: Player.schema,
      LB: Player.schema,
      GK: Player.schema,
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

