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

describe('POST /api/blogs', () => {
    beforeEach(async () => {
      await Blog.deleteMany({}); // Clear the database before each test
    });
  
    test('creates a new blog post and increases the total number of blogs by one', async () => {
      const newBlog = {
        title: 'Test Blog',
        author: 'Test Author',
        url: 'http://testblog.com',
        likes: 10,
      };
  
      const response = await api.post('/api/blogs').send(newBlog).expect(201);
  
      expect(response.body.title).toBe(newBlog.title);
      expect(response.body.author).toBe(newBlog.author);
      expect(response.body.url).toBe(newBlog.url);
      expect(response.body.likes).toBe(newBlog.likes);
  
      const blogs = await Blog.find({});
      expect(blogs).toHaveLength(1);
      expect(blogs[0].title).toBe(newBlog.title);
      expect(blogs[0].author).toBe(newBlog.author);
      expect(blogs[0].url).toBe(newBlog.url);
      expect(blogs[0].likes).toBe(newBlog.likes);
    });
  });
  
  describe('POST /api/blogs', () => {
    beforeEach(async () => {
      await Blog.deleteMany({}); // Clear the database before each test
    });
  
    test('returns status code 400 Bad Request if title is missing', async () => {
      const newBlog = {
        author: 'Test Author',
        url: 'http://testblog.com',
        likes: 10,
      };
  
      const response = await api.post('/api/blogs').send(newBlog).expect(400);
  
      expect(response.body.error).toBe('Title is missing');
  
      const blogs = await Blog.find({});
      expect(blogs).toHaveLength(0);
    });
  
    test('returns status code 400 Bad Request if url is missing', async () => {
      const newBlog = {
        title: 'Test Blog',
        author: 'Test Author',
        likes: 10,
      };
  
      const response = await api.post('/api/blogs').send(newBlog).expect(400);
  
      expect(response.body.error).toBe('URL is missing');
  
      const blogs = await Blog.find({});
      expect(blogs).toHaveLength(0);
    });
  });
  