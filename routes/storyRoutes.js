// You put the next routes here 👇
// example: router.use("/auth", authRoutes)


const express = require ('express')
const router = express.Router()

let StoryModel = require('../models/Story.model.js')

// Go to stories page
// will handle all GET requests to http:localhost:5005/api/stories
router.get('/api/allstories', (req, res) => {
  StoryModel.find()
  //before sending data hide or remove password
  .populate('creator')
   .then((stories) => {
     console.log(stories)
    
      res.status(200).json(stories)
    })

    .catch ((err) => {
      res.status(500).json({
        error: 'Oops, it seems something went wrong!',
        message: err
      })
    })
})

// create like for story
// will handle patch requests to http:localhost:5005/api/stories/:storyId
// router.patch('/api/allstories/:storyId', (req, res) => {
//   const {user} = req.params;
 

//   if() {

//   }

//   StoryModel.findByIdAndUpdate(req.params.storyId)
//     .then((response) => {
//       res.status(200).json(response)

//     })
//     .catch((error) => {
//       res.status(500).json({
//         error: 'Oops, it seems your like is not added!',
//         message: error
//     })
// })


// Go to single story page
// will handle all GET requests to http:localhost:5005/api/stories/:storyId
router.get('/api/allstories/:storyId', (req, res) => {
  StoryModel.findById(req.params.storyId)
  .populate('creator')
  .then((response) => {
    let newResponse = JSON.parse(JSON.stringify(response))
    console.log(newResponse.creator._id);
    console.log(req.session.loggedInUser._id);
    if (newResponse.creator._id == req.session.loggedInUser._id) {
      newResponse.isOwner = true;
    } else {
      newResponse.isOwner = false;
    }
    
      res.status(200).json(newResponse);
  })

  .catch((err) => {
    res.status(500).json({
      error: 'Oops, it seems something went wrong!',
      message: err
    })
  })
})

// Go to add story page
// will handle all POST requests to http:localhost:5005/api/create
router.post('/api/create', (req, res) => {
  const {image, title, description, location, public} = req.body;
  console.log(req.body)
  console.log("in story route",req.session.loggedInUser)

  let creator = req.session.loggedInUser._id

    StoryModel.create({
      image: image,
      title: title,
      description: description,
      location: location,
      creator: creator,
      public: public,
    })

    

    .then((response) => {
      res.status(200).json(response)
    })

    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: 'Oops, it seems something went wrong!',
        message: err
      })
    })
})

// Delete story page
// will handle all DELETE requests to http:localhost:5005/api/stories/storyId
router.delete('/api/stories/:storyId', (req, res) => {
  StoryModel.findByIdAndDelete(req.params.storyId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Oops, it seems something went wrong!",
        message: err,
      });
    });
})


module.exports = router;
