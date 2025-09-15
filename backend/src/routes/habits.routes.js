const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

/* Add a new habit */
router.post('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

/* Update habit */
router.put('/:id', (req, res) => {
  res.send({ message: 'Hello world' });
});

/* Mark habit as done today */
router.patch('/:id/done', (req, res) => {
  res.send({ message: 'Hello world' });
});

/* Delete a habit */
router.delete('/:id', (req, res) => {
  res.send({ message: 'Hello world' });
});

module.exports = router;
