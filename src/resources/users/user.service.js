const usersRepo = require('./user.memory.repository');


const validateUserBody = (req, res, next) => {
  const { name, login, password } = req.body || {};

  if (!password) {
    return res.status(400).json({ message: 'User password required' });
  }
  if (!name) {
    return res.status(400).json({ message: 'User name required' });
  }
  if (!login) {
    return res.status(400).json({ message: 'User login required' });
  }
  next();
  return null;
};

const getAll = () => usersRepo.getAll();

const getUserById = (id) => usersRepo.getById(id);

const createUser = (user) => usersRepo.create(user);

const updateUser = (id, body) => usersRepo.update(id, body);

const deleteUser = (id) => usersRepo.remove(id);

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  validateUserBody,
};
