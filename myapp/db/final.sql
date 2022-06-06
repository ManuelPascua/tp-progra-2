/** eliminino la base de datos **/
drop database auto_garage_db;


/** creo la base de datos **/
create database auto_garage_db;


/** selecciono la base de datos **/
use auto_garage_db;


/** creo la tabla users **/
create table if not exists users (

id int primary key auto_increment not null,
user_name varchar(50) not null,
password varchar(255) not null,
email varchar(200) not null,
date_of_birth date,
create_at datetime default current_timestamp not null,
update_at datetime

);


/** creo la tabla products **/
create table if not exists products (

id int primary key auto_increment not null,
name varchar(100) not null,
description varchar(255) not null,
price decimal(10,2) not null,
year int, 
user_id int,
create_at datetime default current_timestamp null,
update_at datetime

);


/** creo la foreign key entre users y products **/
alter table products add foreign key(user_id) references users(id);


/** inserto datos en la tabla usuario **/
INSERT INTO users
(
user_name,
password,
email,
date_of_birth)
VALUES
(
'admin',
'va encriptado',
'admin@autogarage.com',
'2002-10-24');

INSERT INTO users
(
user_name,
password,
email,
date_of_birth)
VALUES
(
'admin',
'va encriptado',
'admin@autogarage.com',
'2002-10-24');INSERT INTO users
(
user_name,
password,
email,
date_of_birth)
VALUES
(
'admin',
'va encriptado',
'admin@autogarage.com',
'2002-10-24');INSERT INTO users
(
user_name,
password,
email,
date_of_birth)
VALUES
(
'admin',
'va encriptado',
'admin@autogarage.com',
'2002-10-24');INSERT INTO users
(
user_name,
password,
email,
date_of_birth)
VALUES
(
'admin',
'va encriptado',
'admin@autogarage.com',
'2002-10-24');

select * from users;
