const { Person } = require('../models/person.model')

module.exports.index = (req, res) => {
  res.json({ message: "hello world" })
}

module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName
  })
    .then(person => response.json(person))
    .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then(persons => response.json(persons))
    .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
  Person.findOne({_id:request.params.id})
      .then(person => response.json(person))
      .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedPerson => response.json(updatedPerson))
      .catch(err => response.json(err))
}

module.exports.deletePerson = (req, res) => {
  Person.deleteOne({_id:req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}