BEGIN;

INSERT INTO users (name , email , password) VALUES

('Mayar','mayar@gmail.com' , '12345'),
('Yousra','yousra@gmail.com' , '12345'),
('Mohammed','mohammed@gmail.com' , '12345'),
('Zaher','zaher@gmail.com' , '12345');

INSERT INTO blogs (titel , content , user_id) VALUES

('titel1','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.' , '1'),
('titel2','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores' , '2'),
('titel3','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '3'),
('titel4','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt in, voluptates numquam magni fugit quae suscipit voluptatem quisquam iure delectus sunt ipsam deleniti commodi autem facilis alias, consequatur eveniet dolores.'  , '4');

COMMIT;