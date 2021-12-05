const router = require('express').Router({mergeParams: true});
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');


router.get('/', async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.get('/:taskId', async (req, res) => {
  const { taskId } = req.params;

  const task = await tasksService.getTaskById(taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  return res.status(200).json(task);
});

router.post('/', async (req, res) => {
  const { boardId } = req.params;
  const newTask = new Task({ ...req.body, boardId });
  const createdTask = await tasksService.createTask(newTask);

  return res.status(201).json(createdTask);
});

router.put('/:taskId', async (req, res) => {
  const { taskId } = req.params;

  const updatedTask = await tasksService.updateTask(taskId, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  return res.status(200).json(updatedTask);
});

router.delete('/:taskId', async (req, res) => {
  const { taskId } = req.params;

  const deletedUser = await tasksService.deleteTask(taskId);

  if (!deletedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(204).send();
});

module.exports = router;
