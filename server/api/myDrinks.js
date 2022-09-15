const router = require("express").Router();
const {
  models: { MyDrink },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const drinks = await MyDrink.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.send(drinks);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await MyDrink.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const drink = await MyDrink.findByPk(req.params.id);
    await drink.update(req.body);
    res.send(drink);
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const drink = await MyDrink.findByPk(req.params.id);
    await drink.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});
