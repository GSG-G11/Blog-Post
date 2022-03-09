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

  test('GET Route /home, status 302, content-type text', (done) => {
    request(app)
      .get('/home')
      .expect(302)
      .expect('Content-Type', /text/)
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

test('POST Route /register, status 401, content-type json', (done) => {
  request(app)
    .post('/register')
    .expect(401)
    .expect('content-type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

test('POST Route /login, status 400, content-type json', (done) => {
  request(app)
    .post('/login')
    .expect(400)
    .expect('content-type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

test('POST Route /logout, status 302, content-type text', (done) => {
  request(app)
    .post('/logout')
    .expect(302)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

});
