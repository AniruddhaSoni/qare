import mongoose from "mongoose";

export const ConnectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return await mongoose.connect(process.env.MONGO_LINK!);
  }
};
