import { MongoClient } from 'mongodb';
import fs from 'fs';

// Configure axios to support ES modules
const { default: Axios } = axios;
const fetch = Axios.create({ baseURL: '' });

const url = process.env.MONGODB_CONNECTION;
const dbName = process.env.MONGODB_DATABASE;

const jsonFileUrl = 'https://example.com/path/to/your/file.json';

async function seedData() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('gemeentes');

    // Make an HTTP request to retrieve the JSON file data
    const response = await fetch(jsonFileUrl);
    const jsonData = await response.json();

    // Insert the JSON data into the collection
    await collection.insertMany(jsonData);
    console.log('Data seeded successfully');

    client.close();
    console.log('Connection closed');
  } catch (err) {
    console.error(err);
  }
}


seedData();



