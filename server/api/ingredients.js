const router = require('express').Router()
const { models: { Ingredient }} = require('../db')
module.exports = router

/* add new pantry ingredient */
router.post('/', async (req, res, next) => {
  try {
    const ingredient = await Ingredient.create(req.body);
    res.status(201).send(ingredient)
  } catch (err) {
    next(err)
  }
})

/* get all ingredients */
router.get('', async (req, res, next) => {
  try {
    res.send(await Ingredient.findAll())
  } catch (err) {
    next(err)
  }
})

/* get ingredient by ingredient id */
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Ingredient.findByPk(req.params.id))
  } catch (err) {
    next(err)
  }
})
