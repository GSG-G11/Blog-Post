const request = require('supertest');
const app = require('../server/app');

describe('Test route', () => {
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

test('GET Route /xx, status 404, content-type html', (done) => {
  request(app)
    .get('/xx')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});


});
