const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);

describe('GET /api/blogs', () => {
  test('returns the correct amount of blog posts in JSON format', async () => {
    const response = await api.get('/api/blogs').expect(200);

    expect(response.body).toHaveLength(/* expected number of blog posts */);
    expect(response.headers['content-type']).toContain('application/json');
  });
});
