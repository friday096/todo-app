import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoModel = new Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1, // 1 active, 0 deleted
  },
}, {
  timestamps: true,
});

export default mongoose.model('Todo', todoModel);
