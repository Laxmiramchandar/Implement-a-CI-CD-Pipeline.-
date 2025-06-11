const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello, DevOps CI/CD pipeline without Docker!');
});

describe('GET /', () => {
  it('responds with correct message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, DevOps CI/CD pipeline without Docker!');
  });
});
