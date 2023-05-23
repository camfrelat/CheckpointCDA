CREATE TABLE recruiter (
	id integer PRIMARY KEY AUTOINCREMENT,
	login varchar,
	password varchar,
	companyId integer
);

CREATE TABLE candidate (
	id integer PRIMARY KEY AUTOINCREMENT,
	login varchar,
	password varchar,
	lastname varchar,
	firstname varchar,
	email varchar,
	phoneNumber varchar,
	description varchar
);

CREATE TABLE company (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar,
	description varchar
);

CREATE TABLE Offer (
	id integer PRIMARY KEY AUTOINCREMENT,
	title varchar,
	description varchar,
	city varchar,
	companyId integer
);

CREATE TABLE jobApplication (
	id integer PRIMARY KEY AUTOINCREMENT,
	candidateId integer,
	OfferId integer
);






