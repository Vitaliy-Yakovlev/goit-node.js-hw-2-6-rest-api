const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  logout,
  current,
  patchUser,
  patchUploadAvatars,
} = require('../../controllers/controllerUser');
const {
  validateUser,
  validateUsersPatch,
} = require('../../validation/validationUser');

const guard = require('../../helpers/guard');
const loginLimit = require('../../helpers/rote-limit-login');
const uploads = require('../../helpers/uploads');

router.post('/signup', validateUser, signup);
router.post('/login', loginLimit, validateUser, login);
router.post('/logout', guard, logout);
router.get('/current', guard, current);
router.patch('/avatars', guard, uploads.single('avatars'), patchUploadAvatars);
router.patch('/', guard, validateUsersPatch, patchUser);

module.exports = router;
