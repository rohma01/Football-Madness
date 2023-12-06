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
    roomId: Number,
    team: {
      //ST: Player.schema,
      ST:{ type: Player.schema, default: new Player()},
      RW:{ type: Player.schema, default: new Player()},
      LW:{ type: Player.schema, default: new Player()},
      CAM:{ type: Player.schema, default: new Player()},
      CM:{ type: Player.schema, default: new Player()},
      CDM:{ type: Player.schema, default: new Player()},
      RCB:{ type: Player.schema, default: new Player()},
      LCB:{ type: Player.schema, default: new Player()},
      RB:{ type: Player.schema, default: new Player()},
      LB:{ type: Player.schema, default: new Player()},
      GK:{ type: Player.schema, default: new Player()}
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

