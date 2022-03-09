const connection = require('../server/database/config/connections');
const { dbBuild } = require('../server/database/config/build');
const signUpQuirey = require('../server/database/queries/signupDB');

beforeEach(() => dbBuild());

test('Insert  user  in DB and check your email ', () => {
  const data = {
    name: 'Mayar',
    email: 'mayar@gmail.com',
    password: '5dywOrzop4bONVjqcjOU0mtInkvJDG5yoyXxDeWAZqSWou0Z3O',
  };
  return signUpQuirey(data).then((data) => {
    console.log(data.rows[0]);
    expect(data.rows[0]).toEqual({ email: 'mayar@gmail.com' });
  });
});

test('Insert  user  in DB and check your email ', () => {
  const data = {
    name: 'Ali',
    email: 'ali@gmail.com',
    password: '5dywOrzop4bONVjqcjOU0mtInkvJDG5yoyXxDeWAZqSWou0Z3O',
  };
  return signUpQuirey(data).then((data) => {
    console.log(data.rows[0]);
    expect(data.rows[0]).toEqual({ email: 'ali@gmail.com' });
  });
});
afterAll(() => connection.end());
