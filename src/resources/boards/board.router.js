const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');
const tasksRouter = require('../tasks/tasks.router');

router.use('/:boardId/tasks', tasksRouter);

router.get('/', async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.get('/:boardId', async (req, res) => {
  const { boardId } = req.params;

  const board = await boardService.getBoardById(boardId);

  if (!board) {
    return res.status(404).json({ message: 'Board not found' });
  }

  return res.status(200).json(board);
});

router.post('/', boardService.validateBoardBody, async (req, res) => {
  const newBoard = new Board(req.body);
  const createdBoard = await boardService.createBoard(newBoard);

  return res.status(201).json(createdBoard);
});

router.put('/:boardId', async (req, res) => {
  const { boardId } = req.params;

  const updatedBoard = await boardService.updateBoard(boardId, req.body);

  if(!updatedBoard) {
    return res.status(404).json({message: 'Board not found'});
  }

  return res.status(200).json(updatedBoard)
});

router.delete('/:boardId', async (req, res) => {
  const {boardId} = req.params;

  const deletedUser = await boardService.deleteBoard(boardId);

  if(!deletedUser) {
    return res.status(404).json({message: 'User not found'});
  }

  return res.status(204).send();
});

module.exports = router;
