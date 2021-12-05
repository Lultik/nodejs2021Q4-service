const DB = require('../../database');
const { Column } = require('./board.model');

const getAll = async () => DB.boards;

const getById = async (id) => DB.boards.find(u => u.id === id);

const create = async (user) => {
  DB.boards.push(user);
  return user;
};

const update = async (id, body) => {
  const boardIndex = DB.boards.findIndex(u => u.id === id);

  const { title, columns } = body;

  if (boardIndex === -1) {
    return null;
  }

  DB.boards[boardIndex] = {
    ...DB.boards[boardIndex],
    title,
    columns: [
      ...DB.boards[boardIndex].columns.map(col => {
        const updatedColIndex = columns.findIndex(c => c.id === col.id);

        return updatedColIndex > -1 ? columns.splice(updatedColIndex, 1)[0] : col;
      }),
      ...columns.map(col => new Column(col))
    ]
  };

  return DB.boards[boardIndex];
};


const remove = async (id) => {
  const boardIndex = DB.boards.findIndex(b => b.id === id);

  if (boardIndex === -1) {
    return null;
  }

  DB.tasks = DB.tasks.filter(task => task.boardId !== id);

  return DB.boards.splice(boardIndex, 1);
};

module.exports = { getAll, getById, create, update, remove };
