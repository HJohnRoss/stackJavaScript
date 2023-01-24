const PlayerController = require('../controllers/player.controller')

module.exports = function(app) {
  app.get('/api/all', PlayerController.findAll)
  app.post('/api/player/create', PlayerController.createPlayer)
  app.delete('/api/player/delete/:id', PlayerController.deletePlayer)
  app.put('/api/player/update/:id', PlayerController.updatePlayer)
}