const express = require('express');

const {handlegetAllUsers, handlegetAllUsersById, handleEditUserById, handleDeleteUserById, handleCreateNewUser} = require('../controllers/user')
const router = express.Router();

router
    .get('/', handlegetAllUsers)
    .post('/', handleCreateNewUser);

router
    .route('/:id')
    .get(handlegetAllUsersById)
    .patch(handleEditUserById)
    .delete(handleDeleteUserById);

router.post('/', handleCreateNewUser);

module.exports = router;
