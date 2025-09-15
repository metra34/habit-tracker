const { getDB } = require('../db');

const COLLECTION_NAME = 'habits';

/* return all habits */
async function getAll() {
  const collection = getDB().collection(COLLECTION_NAME);
  const habits = await collection.find({});

  return habits;
}

module.exports = {
  getAll,
};
