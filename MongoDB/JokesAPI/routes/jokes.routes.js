const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
  app.get('/api/jokes', JokesController.findAllJokes)
  app.get('/api/jokes/random', JokesController.randomJoke)
  app.post('/api/jokes/new', JokesController.createNewJoke)
  app.put('/api/jokes/update/:id', JokesController.updateJoke)
  app.delete('/api/jokes/delete/:id', JokesController.deleteJoke)
}