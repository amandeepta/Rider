const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};


// Export the function
module.exports = dbConnect;
