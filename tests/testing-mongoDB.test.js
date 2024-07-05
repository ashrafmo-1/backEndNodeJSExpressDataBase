const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://ashrafmohamed1176:TOgMZCglmXsb3vhA@users.r4ytxl8.mongodb.net/Quotation?retryWrites=true&w=majority&appName=products';
const client = new MongoClient(url);
const dbName = 'Quotation';

const main = async () => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('products');
  const data = await collection.find().toArray();
  console.log("data", data);
}
main();