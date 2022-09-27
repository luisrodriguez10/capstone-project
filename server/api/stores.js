const router = require("express").Router();
module.exports = router;
const axios = require("axios");

router.get("/", async (req, res, next) => {
  await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        req.headers.lat
      },${req.headers.lng}&type=${req.headers.type}&radius=${
        req.headers.radius * 1000
      }&key=${req.headers.key}`
    )
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
