const boardRouter = require('express').Router();
const board = require('../controller/board.controller.ts');

// Create board
boardRouter.post('/api/board', board.create);

// Retrieve all board items
boardRouter.get('/api/board', board.findAll);

// Retrieve board by id
boardRouter.get('/api/board/:id', board.findOne);

// Update board by id
boardRouter.put('/api/board/:id', board.update);

// Delete board by id
boardRouter.delete('/api/board/:id', board.delete);

//TODO
// Delete all board items
// router.delete('/api/board', board.deleteAll);

//TODO
// Retrieve all published board items
// router.get('/published', board.findAllPublished);

module.exports = boardRouter;
