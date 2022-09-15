const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
// router.use('/ingredients', require('./ingredient'))
// router.use('/pantryItems', require('./pantryItems'))
router.use('/myDrinks', require('./myDrinks'))
// router.use('/reviews', require('./reviews'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
