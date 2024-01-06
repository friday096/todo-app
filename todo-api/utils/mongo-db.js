import mongoose from 'mongoose';
const connect = "mongodb+srv://santos:TmundYM8fW6GpfR5@cluster0.mcazoh6.mongodb.net/todo?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(connect, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default mongoDB;
