const taskRepo = require('./tasks.memory.repository');

const getAll = () => taskRepo.getAll();

const getTaskById = (id) => taskRepo.getById(id);

const createTask = (user) => taskRepo.create(user);

const updateTask = (id, body) => taskRepo.update(id, body);

const deleteTask = (id) => taskRepo.remove(id);

module.exports = {
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
