import { createPost, getPosts, deletePost, togglePost } from '../service/todoservice.js';

export const postController = {
  createPost: async (req, res) => {
    try {
      createPost(req.body, (err, result) => {
        if (err) {
          res.status(500).json({
            status: 201,
            message: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: 'Post successfully created',
            data: result.data,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        code: 201,
        message: err.message,
      });
    }
  },

  getPosts: async (req, res) => {
    try {
      getPosts((err, result) => {
        if (err) {
          res.status(500).json({
            status: 201,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Posts retrieved successfully',
            data: result.data,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        code: 201,
        message: err.message,
      });
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      deletePost(postId, (err, result) => {
        if (err) {
          res.status(500).json({
            status: 201,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Post deleted successfully',
            data: result.data,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        code: 201,
        message: err.message,
      });
    }
  },

  togglePost: async (req, res) => {
    try {
      const postId = req.params.id;
      togglePost(postId, (err, result) => {
        if (err) {
          res.status(500).json({
            status: 201,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Post toggled successfully',
            data: result.data,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        code: 201,
        message: err.message,
      });
    }
  },
};
