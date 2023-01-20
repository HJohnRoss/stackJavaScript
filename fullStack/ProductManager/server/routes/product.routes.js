const ProductController = require('../controllers/product.controller')

module.exports = function(app){
  app.post('/api/product/create', ProductController.createProduct)
}