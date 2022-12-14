const router = require('express').Router()
const { models: { Review }} = require('../db')
const User = require('../db/models/User')
module.exports = router

/* add new review */
router.post('/', async (req, res, next) => {
  try {
    let review = await Review.create(req.body);
    review = await Review.findByPk(review.id, {
      include: [
        {
          model: User
        }
      ]
    })
    res.status(201).send(review)
  } catch (err) {
    next(err)
  }
})

/* get reviews by drink */
router.get('/drinks/:drinkId', async (req, res, next) => {
  try {
    res.send(await Review.findAll({
      where: {
        drinkId: req.params.drinkId
      },
      include: [
        {
          model: User
        }
      ]
    }))
  } catch (err) {
    next(err)
  }
})

/* get reviews by user */
router.get('/user/:userId', async (req, res, next) => {
  try {
    res.send(await Review.findAll({
      where: {
        userId: req.params.userId
      }
    }))
  } catch (err) {
    next(err)
  }
})

/* delete review */
router.delete('/:id', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id)
    await review.destroy();
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

/* edit review */
router.put('/:id', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id)
    await review.update(req.body);
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
