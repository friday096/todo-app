import Todo from '../model/todoModel.js';

export const createPost = async (data, callback) => {
  try {
    const newPost = new Todo(data);
    await newPost.save();
    callback(null, { data: newPost });
  } catch (err) {
    callback({ status: 203, message: err.message }, null);
  }
};

export const getPosts = async (callback) => {
  try {
    const posts = await Todo.find();
    callback(null, { data: posts });
  } catch (err) {
    callback({ status: 203, message: err.message }, null);
  }
};

export const deletePost = async (postId, callback) => {
  try {
    const result = await Todo.findByIdAndDelete(postId);
    callback(null, { data: result });
  } catch (err) {
    callback({ status: 203, message: err.message }, null);
  }
};

export const togglePost = async (postId, callback) => {
  try {
    const post = await Todo.findById(postId);
    post.status = post.status === 0 ? 1 : 0; 
    await post.save();
    callback(null, { data: post });
  } catch (err) {
    callback({ status: 203, message: err.message }, null);
  }
};
