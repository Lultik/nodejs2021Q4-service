const DB = require('../../database');

const getAll = async () => DB.users;

const getById = async (id) => DB.users.find(u => u.id === id);

const create = async (user) => {
  DB.users.push(user);
  return user;
};

const update = async (id, body) => {
  const userIndex = DB.users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return null;
  }

  DB.users[userIndex] = { ...DB.users[userIndex], ...body };
  return DB.users[userIndex];
};

const remove = async (id) => {
  const userIndex = DB.users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return null;
  }

  DB.tasks = DB.tasks.map(task => {
    if(task.userId === id) {
      return {...task, userId: null };
    }
    return task;
  })

  return DB.users.splice(userIndex, 1);
};

module.exports = { getAll, getById, create, update, remove };
