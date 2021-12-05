const DB = require('../../database');

const getAll = async () => DB.tasks;

const getById = async (id) => DB.tasks.find(u => u.id === id);

const create = async (task) => {
  DB.tasks.push(task);
  return task;
};

const update = async (id, body) => {
  const taskIndex = DB.tasks.findIndex(u => u.id === id);

  if (taskIndex === -1) {
    return null;
  }

  DB.tasks[taskIndex] = { ...DB.tasks[taskIndex], ...body };
  return DB.tasks[taskIndex];
};


const remove = async (id) => {
  const taskIndex = DB.tasks.findIndex(b => b.id === id);

  if (taskIndex === -1) {
    return null;
  }
  return DB.tasks.splice(taskIndex, 1);
};

module.exports = { getAll, getById, create, update, remove };
