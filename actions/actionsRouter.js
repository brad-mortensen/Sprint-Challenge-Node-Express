const express = require('express');
const actionDb = require('../data/helpers/actionModel');
const router = express.Router();


router.get('/', (req, res) => {
  actionDb.get()
    .then(action => {
      res.status(200).json(action);
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
  actionDb
    .get(id)
    .then(action => {
      if (action === 0) {
        res.status(404).json({ error: 'No user by that Id in the DB'}, res);
      }
      res.json(action);
    })
    .catch(error => {
      res.status(500).json({ error: 'Server Error'}, res);
    });
});


// router.get('/api/users/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   actionDb
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
    const actionData = req.body;
    const actionId = await actionDb.insert(actionData);
    res.status(201).json(actionId);
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
  actionDb.update(id, changes).then(count =>
    res.status(200).json(count)
  ).catch(error => {
    res.status(500).json({
      message: 'error updating post',
      error
    })
  })
});

router.delete('/:id', (req, res) => {
  actionDb.remove(req.params.id).then(count => {
    res.status(200).json(count)
  }).catch(error => {
    res.status(404).json({
      message: "The post with the specified ID does not exist.",
      error
    })
  })
});


module.exports = router;