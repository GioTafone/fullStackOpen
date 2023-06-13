const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const mongoose = require('mongoose');
const Blog = require('../models/blog');

describe('GET /api/blogs', () => {
  beforeEach(async () => {
    await Blog.deleteMany({}); // Clear the database before each test
  });

  test('returns the correct amount of blog posts in JSON format', async () => {
    const blogPost = new Blog({
      title: 'Test Blog',
      author: 'Test Author',
      url: 'http://testblog.com',
      likes: 10,
    });
    await blogPost.save();

    const response = await api.get('/api/blogs').expect(200);

    expect(response.body).toHaveLength(1);
    expect(response.headers['content-type']).toContain('application/json');
  });

  test('verifies that the unique identifier property of blog posts is named id', async () => {
    const blogPost = new Blog({
      title: 'Test Blog',
      author: 'Test Author',
      url: 'http://testblog.com',
      likes: 10,
    });
    const savedBlog = await blogPost.save();

    const response = await api.get(`/api/blogs/${savedBlog.id}`).expect(200);

    expect(response.body.id).toBeDefined();
    expect(response.body._id).toBeUndefined();
  });
});
