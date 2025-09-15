const { MongoClient } = require('mongodb');

if (!process.env.MONGODB_URL || !process.env.MONGODB_NAME) {
  throw new Error('MONGODB_URL, MONGODB_NAME env required');
}

const url = process.env.MONGODB_URL;
const name = process.env.MONGODB_NAME;
const client = new MongoClient(url);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(name);
  }
  return db;
}

function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB() first.');
  }
  return db;
}

module.exports = {
  connectDB,
  getDB,
};
