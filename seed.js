import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Item from './models/Item.js';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/groceryDB';
await mongoose.connect(MONGO_URI);
console.log("Connected for seeding");
await Item.deleteMany({});
await Item.insertMany([
  { name: "Rice 5kg", price: 1200, quantity: 20, code: "1001" },
  { name: "Sugar 1kg", price: 160, quantity: 50, code: "1002" },
  { name: "Oil 1L", price: 480, quantity: 30, code: "1003" }
]);
console.log("Seed done");
process.exit(0);
