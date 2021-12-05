const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.get('/', async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  const user = await usersService.getUserById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(User.toResponse(user));
});

router.post('/', usersService.validateUserBody, async (req, res) => {
  const newUser = new User(req.body);
  const createdUser = await usersService.createUser(newUser);

  return res.status(201).json(User.toResponse(createdUser));
});

router.put('/:userId', async (req, res) => {
  const { userId } = req.params;

  const updatedUser = await usersService.updateUser(userId, req.body);

  if(!updatedUser) {
    return res.status(404).json({message: 'User not found'});
  }

  return res.status(200).json(User.toResponse(updatedUser))
});

router.delete('/:userId', async (req, res) => {
  const {userId} = req.params;

  const deletedUser = await usersService.deleteUser(userId);

  if(!deletedUser) {
    return res.status(404).json({message: 'User not found'});
  }

  return res.status(204).send();
})

module.exports = router;
