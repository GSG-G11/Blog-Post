BEGIN;

INSERT INTO users (name , email , password) VALUES
  ('Mayar','mayar@gmail.com' , '$2a$10$Py.5dywOrzop4bONVjqcjOU0mtInkvJDG5yoyXxDeWAZqSWou0Z3O'),
  ('Yousra','yousra@gmail.com' , '$2a$10$dUFu9xzKWsRGG4TCaryI/u3TNCWpBC3H4cq2Krfq3gqLE.QfCGcQ.'),
  ('Mohammed','mohammed@gmail.com' , '$2a$10$6VK.9L3u7oORtqeOJUDAXOQoEOXp.z1E0tnsycmHqScL30QZfJa0u'),
  ('Zaher','zaher@gmail.com' , '$2a$10$Fc9sA8COITiuZdX8NlNSPuqLgYecbIQy2lh38WkyeUEk8LTl4fUDS');

INSERT INTO blogs (titel , content , user_id) VALUES
  ('titel1','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.' , '1'),
  ('titel2','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores' , '2'),
  ('titel3','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '3'),
  ('titel4','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '4');

COMMIT;