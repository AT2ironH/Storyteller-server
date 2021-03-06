const router = require("express").Router();
const userModel = require("../models/User.model");


//user's page  
router.get("/api/user/:userId", (req, res) => {
    userModel
      .findById(req.params.userId)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: "Something went wrong",
          message: err,
        });
      }); 
})


// //saved stories
// router.get("/api/user/:singleStory", (req, res) => {
//   userModel
//     .findById(req.params.userId)
//     .then((response) => {
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: "Something went wrong",
//         message: err,
//       });
//     });
// });


//edit profile
router.patch("/api/user/:id", (req, res) => {
  let id = req.params.id;
  const { name, email } = req.body;
  userModel.findByIdAndUpdate(
    id,
    { $set: { name: name, email: email } },
    { new: true }
  )
    .then((response) => {
      req.session.loggedInUser = response;
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});



module.exports = router;
