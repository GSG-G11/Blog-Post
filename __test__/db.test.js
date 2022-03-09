const connection = require('../server/database/config/connections');
const { dbBuild } = require('../server/database/config/build');
const signUpQuirey = require('../server/database/queries/signupDB');

beforeEach(() => dbBuild());

test('Insert  user  in DB and check rowCount ', () => {
  const data = {
    name: 'Mayar',
    email: 'mayar@gmail.com',
    password: '5dywOrzop4bONVjqcjOU0mtInkvJDG5yoyXxDeWAZqSWou0Z3O',
  };
  return signUpQuirey(data).then((data) => {
    expect(data.rowCount).toBe(1);
  });
});

test('Insert  user  in DB and check rowCount ', () => {
  const data = {
    name: 'Ali',
    email: 'ali@gmail.com',
    password: '5dywOrzop4bONVjqcjOU0mtInkvJDG5yoyXxDeWAZqSWou0Z3O',
  };
  return signUpQuirey(data).then((data) => {
    expect(data.rowCount).toBe(1);
  });
});
afterAll(() => connection.end());
