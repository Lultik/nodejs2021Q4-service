const boardRepo = require('./board.memory.repository');

const validateBoardBody = (req, res, next) => {
  const { title, columns } = req.body || {};

  if (!title) {
    return res.status(400).json({ message: 'Board title required' });
  }
  if (!columns) {
    return res.status(400).json({ message: 'Board columns required' });
  }
  next();
  return null;
};

const getAll = () => boardRepo.getAll();

const getBoardById = (id) => boardRepo.getById(id);

const createBoard = (user) => boardRepo.create(user);

const updateBoard = (id, body) => boardRepo.update(id, body);

const deleteBoard = (id) => boardRepo.remove(id);

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  validateBoardBody,
};
