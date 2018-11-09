const express = require('express');
const projectsDb = require('../data/helpers/projectModel');
const router = express.Router();


router.get('/', (req, res) => {
  projectsDb.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "The user information could not be retrieved."
        });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectsDb
    .get(id)
    .then(project => {
      if (project === 0) {
        res.status(404).json({ error: 'No user by that Id in the DB'}, res);
      }
      res.json(project);
    })
    .catch(error => {
      res.status(500).json({ error: 'Server Error'}, res);
    });
});

router.get('/projectActions/:id', (req, res) => {
  projectsDb.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json({ error: "The projects could not be retrieved. "}))
});


// router.get('/api/users/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   projectsDb
//     .getUserPosts(userId)
//     .then(usersPosts => {
//       if (usersPosts === 0) {
//         return errorHelper(404, 'No posts by that user', res);
//       }
//       res.json(usersPosts);
//     })
//     .catch(err => {
//       return errorHelper(500, 'Database boof', res);
//     });
// });

router.post('/', async (req, res) => {
  // if(!req.body.title || !req.body.contents){
  //   res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
  // }
  try {
    const projectData = req.body;
    const projectId = await projectsDb.insert(projectData);
    res.status(201).json(projectId);
  } 
  catch (error) {
    res.status(500).json({
      error: "There was an error while saving the post to the database",
      error
    })
  }
});

router.put('/:id', (req, res) => {
  // if(!req.body.title || !req.body.contents){
  //   res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
  // }
  const changes = req.body;
  const { id } = req.params;
  projectsDb.update(id, changes).then(count =>
    res.status(200).json(count)
  ).catch(error => {
    res.status(500).json({
      message: 'error updating post',
      error
    })
  })
});

router.delete('/:id', (req, res) => {
  projectsDb.remove(req.params.id).then(count => {
    res.status(200).json(count)
  }).catch(error => {
    res.status(404).json({
      message: "The post with the specified ID does not exist.",
      error
    })
  })
});


module.exports = router;