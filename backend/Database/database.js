const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/myDB";
const url = "mongodb+srv://virendrarathva75:Viren9909@users.rfi4n.mongodb.net/userDB";


async function connectToDatabase() {
    try {
        await mongoose.connect(url)
        const db = mongoose.connection;
        console.log(db.name);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = { connectToDatabase };