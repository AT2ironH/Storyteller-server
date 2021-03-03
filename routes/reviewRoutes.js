const router = require("express").Router();

//post a review page
router.post("/api/placeReview", (req, res) => {
  const { reviewMessage } = req.body;
  reviewModel.create({
    reviewMessage,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});


module.exports = router;
