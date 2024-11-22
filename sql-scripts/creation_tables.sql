--\c zytologueDB -- connection to the created database

CREATE TABLE IF NOT EXISTS brewery (
	id_brewery			SERIAL primary key,
	brewery_name		VARCHAR(50)	not null,
	country				VARCHAR(50),
	region				VARCHAR(50),
	city				VARCHAR(50),
	adress				VARCHAR(150),
	inauguration_date 	DATE
);

CREATE TABLE IF NOT EXISTS category (
	id_category 		SERIAL primary key,
	category_name		VARCHAR(50) not null,
	description			VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS "user" (
	id_user		SERIAL primary key,
	first_name	VARCHAR(50),
	email		VARCHAR(250),
	password	VARCHAR(100),
	legal_age	BOOLEAN
);

CREATE TABLE IF NOT EXISTS ingredient(
	id_ingredient	SERIAL primary key,
	ingredient_name	VARCHAR(50),
	type			VARCHAR(50),
	description		VARCHAR(250),
	provider		VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS beer (
	id_beer			SERIAL primary key,
	beer_name		VARCHAR(50)	not null,
	description		VARCHAR(250),
	abv				NUMERIC,
	colour			VARCHAR(50),
	bitternes		INTEGER,
	body			VARCHAR(50),
	release_date	DATE,
	photoURL		VARCHAR(250),
	id_brewery		SERIAL,
	id_category		SERIAL,
	foreign key (id_brewery) references brewery(id_brewery) on delete cascade, 
	foreign key (id_category) references category(id_category)on delete CASCADE
);

CREATE TABLE IF NOT EXISTS beer_ingredient (
	id_beer		SERIAL,
	id_ingredient	SERIAL,
	primary	key (id_beer,id_ingredient),
	foreign key (id_beer) references beer(id_beer) on delete cascade,
	foreign key (id_ingredient) references ingredient(id_ingredient) on delete cascade
);

CREATE TABLE IF NOT exists review (
	id_beer		SERIAL,
	id_user		SERIAL,
	bodytext	VARCHAR(50),
	stars		INTEGER,
	photo		VARCHAR(250),
	primary	key (id_beer,id_user),
	foreign key (id_beer) references beer(id_beer) on delete cascade,
	foreign key (id_user) references "user"(id_user) on delete cascade
);

CREATE TABLE IF NOT exists favourite_beer (
	id_beer		SERIAL,
	id_user		SERIAL,
	primary	key (id_beer,id_user),
	foreign key (id_beer) references beer(id_beer) on delete cascade,
	foreign key (id_user) references "user"(id_user) on delete cascade
);

