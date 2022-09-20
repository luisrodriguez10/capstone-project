const router = require('express').Router()
const { models: { PantryItem }} = require('../db')
module.exports = router

/* add new pantry item */
router.post('/', async (req, res, next) => {
  try {
    const item = await PantryItem.create(req.body);
    res.status(201).send(item)
  } catch (err) {
    next(err)
  }
})

/* get pantry item by item id */
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await PantryItem.findByPk(req.params.id))
  } catch (err) {
    next(err)
  }
})

/* get pantry items by user */
router.get('/user/:userId', async (req, res, next) => {
  try {
    res.send(await PantryItem.findAll({
      where: {
        userId: req.params.userId
      }
    }))
  } catch (err) {
    next(err)
  }
})

/* delete pantry item */
router.delete('/:id', async (req, res, next) => {
  try {
    const item = await PantryItem.findByPk(req.params.id)
    await item.destroy();
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

/* edit pantry item */
router.put('/:id', async (req, res, next) => {
  try {
    const item = await PantryItem.findByPk(req.params.id)
    await item.update(req.body);
    res.send(item);
  } catch (err) {
    next(err)
  }
})
