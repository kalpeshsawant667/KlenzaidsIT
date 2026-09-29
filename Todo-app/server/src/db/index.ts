import mongoose from 'mongoose';
import { MONGO_URI } from '../utils/variables';

const connectDB = async (): Promise<void> => {

    if (!MONGO_URI) {
        throw new Error('MONGO_URI is not defined in environment variables');
    }

    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`MongoDB connection failed: ${message}`);
        process.exit(1);
    }
};

export default connectDB;