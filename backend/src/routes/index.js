const express = require('express');
const createError = require('http-errors');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(404).send(createError.NotFound());
});

module.exports = router;
