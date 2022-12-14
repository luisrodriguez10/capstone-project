const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/ingredients', require('./ingredients'))
router.use('/pantryItems', require('./pantryItems'))
router.use('/myDrinks', require('./myDrinks'))
router.use('/reviews', require('./reviews'))
router.use('/stores', require('./stores'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
