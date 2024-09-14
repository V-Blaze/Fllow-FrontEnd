import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  }
};

export default connectMongo;
