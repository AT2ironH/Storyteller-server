// You put the next routes here 👇
// example: router.use("/auth", authRoutes)


const express = require ('express')
const router = express.Router()

let StoryModel = require('..models/Story.model')

// Go to stories page
// will handle all GET requests to http:localhost:5005/api/stories
router.get('/api/stories', (req, res) => {
  StoryModel.find()
   .then((stories) => {
      res.status(200).json(stories)
    })

    .catch ((err) => {
      res.status(500).json({
        error: 'Oops, it seems something went wrong!',
        message: err
      })
    })
})

// Go to single story page
// will handle all GET requests to http:localhost:5005/api/stories/:storyId
router.get('/api/stories/:storyId', (req, res) => {
  StoryModel.findById(req.params.storyId)
  .then((response) => {
      res.status(200).json(response)
  })

  .catch((err) => {
    res.status(500).json({
      error: 'Oops, it seems something went wrong!',
      message: err
    })
  })
})

// Go to add story page
// will handle all POST requests to http:localhost:5005/api/create_story
router.post('./api/create', (req, res) => {
  const {image, title, description, location, creator, public} = req.body;
  console.log(req.body)

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
      res.status(500).json({
        error: 'Oops, it seems something went wrong!',
        message: err
      })
    })
})

// Delete story page
// will handle all DELETE requests to http:localhost:5005/api/stories/storyId
router.delete('/api/stories/:storyId', (req, res) => {
  StoryModel.findByIdAndDelete(req. params.id) 
  .then((response) => {
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Oops, it seems something went wrong!',
      message: err
    })
    
  })
})


module.exports = router;
