const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const login = (req, res, next) => {
    
  const userid = req.body.userid || ''
  const password = req.body.password || ''
  
  if (userid == '' || password == '') {
      return res.send(401)
  }
  
  User.findOne({userid : userid, password : password}, function (err, user) {
      if(err) {
          return res.send(401)
      }
      
      
      User.verifyPass(password, function(isMatch) {
      if (!isMatch) {
        return res.send(401);
      } else {
          return res.send(200)
      }
  })
})
}
module.exports = { login }    