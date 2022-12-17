// init express module
const express = require('express');

// init express router
const router = express.Router();

// get Controller
// const {
//     getTodos,
//     getTodo,
//     addTodo,
//     updateTodo,
//     deleteTodo,
// } = require('../controllers/todo');

// // create route
// router.get('/todos', getTodos);
// router.get('/todo/:id', getTodo);
// router.post('/todo', addTodo);
// router.patch('/todo/:id', updateTodo);
// router.delete('/todo/:id', deleteTodo);

const { 
    addUsers,
    getUsers,
    getUser,
    updatedUser,
    deleteUser,
 } = require('../controllers/user');

router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updatedUser);
router.delete('/user/:id', deleteUser);

// Export module router
module.exports = router;