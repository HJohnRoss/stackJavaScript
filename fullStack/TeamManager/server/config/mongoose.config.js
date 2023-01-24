const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/team_manager', {
  useNewUrlParser: true
})
  .then(() => console.log("Esablished a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err))