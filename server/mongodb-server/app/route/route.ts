const router = require('express').Router();
const tutorial = require('../controller/controller.ts');

// Create document
router.post('/api/tutorial', tutorial.create);

// Retrieve all documents
router.get('/api/tutorial', tutorial.findAll);

// Retrieve all published Tutorials
// router.get('/published', tutorial.findAllPublished);

// Retrieve single document
router.get('/api/tutorial/:id', tutorial.findOne);

// Update document by id
router.put('/api/tutorial/:id', tutorial.update);

// Delete document by id
router.delete('/api/tutorial/:id', tutorial.delete);

// Create a new Tutorial
// router.delete('/', tutorial.deleteAll);

module.exports = router;

// module.exports = app => {
//   const router = require('express').Router();
//   const tutorial = require('../controller/controller.ts');
//
//   // Create a new Tutorial
//   router.post('/', tutorial.create);
//
//   // Retrieve all Tutorials
//   router.get('/', tutorial.findAll);
//
//   // Retrieve all published Tutorials
//   // router.get('/published', tutorial.findAllPublished);
//
//   // Retrieve a single Tutorial with id
//   router.get('/:id', tutorial.findOne);
//
//   // Update a Tutorial with id
//   router.put('/:id', tutorial.update);
//
//   // Delete a Tutorial with id
//   router.delete('/:id', tutorial.delete);
//
//   // Create a new Tutorial
//   // router.delete('/', tutorial.deleteAll);
//
//   app.use('/api/tutorial', router);
// };
