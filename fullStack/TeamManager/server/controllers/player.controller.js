const { Player } = require('../models/player.model')

module.exports.findAll = (req, res) => {
  Player.find({})
    .then(players => res.json(players))
    .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) => {
  const { name, position } = req.body
  Player.create({
    name,
    position
  })
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({_id: req.params.id})
    .then(deleted => res.jsoon(deleted))
    .catch(err => res.json(err))
}

module.exports.updatePlayer = (req, res) => {
  Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedPlayer => res.jason(updatedPlayer))
    .catch(err => res.json(err))
}