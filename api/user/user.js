const restful = require('node-restful')
const bcrypt = require('bcrypt')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    
  userid: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true }
})

userSchema.methods.verifyPass = function(password, next) {
    bcrypt.compare(password, this.password, function(err, isMatch){
        if (err) return next(err)
        next(isMatch)
    })
}

module.exports = restful.model('user', userSchema)
