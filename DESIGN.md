# Design

## Application Design

To structure the project I decided I would separate the different components of the application into three, frontend, backend as well as database. In the end of this file I talk about what I would do if more time where at my hands.

### General design principles

The task was to develop a MVC application as well as a backend API that follows the principles of REST. I focused on structuring my code and architechture in relevant folders based on basic react structure.

### Frontend

The frontend is a classic React Frontend that takes use of React redux for statefullness. As i didn't want to maintain a 2000 lines long ".less" file i decided that I where going to take use of external components as much as possible. Things such as responsiveness comes easy when using a library like @mui. This was the first time working with external components but I really enjoyed it.

I'm happy with how the user-feedback turned out and I think it as informative as possible. I'm also happy with my redux store as I don't handle state as one variable but rather an object with various features. For example storing "booked[]" boxes and displaying. or keeping a count of "new(int)" boxes that the user has created as a counter, as well as having access to the "error"(string)" variable at all times to verify if something unexpected has occured etc. I'm satisfied with the frontend hand how I've implemented the requirements.

* Bonus *
I've also completed the optional requirement of restricting the color blue when chosing a color for your box. This was a fun task that forced me to really think about what defines color and how i can meassure and restrict it.

### Backend

When I started developing the backend I had in mind to go fully functional with the help of the Spring webflux framework. I ended up switching back to the standard Spring framework as I didn't want (and wasn't allowed) to take use of ORM frameworks and didn't have time to investigate and research into alternative solutions.

The time I spent with Spring webflux and functional programming where really fun and challenging so it's definetely something I will test and try out further in my spare time.

### Database

One requirement that I know I didn't complete was that the code trial requirements specified MySQL and I took use of PostgreSQL.

I created pre defined SQL queries both for safety as well ease of use.
The database table is created as the following with the following reasoning:

DROP TABLE IF EXISTS boxes ;
CREATE TABLE boxes (
  id SERIAL,
  name VARCHAR(20) NOT NULL,
  weight double precision,
  color VARCHAR(25),
  country VARCHAR(3),
  PRIMARY KEY (id)
);

Dropping the table if it exists (for testing purposes).
An id generated automatically and incrementally in the backend rather than in the frontend as the backend most likely is a single node and a single source of truth.
A name with the length of 20 (The same maximum length as in the frontend creation).
A weight represented as a double precision to be able to store decimals.
A color with the length of 27 (The maximum length of the value generated in the frontend color picker, ex: 255.000, 255.000, 255.000).
A country with the length of 3 (The maximum length of the value from frontend, ex: SWE or AUZ).
The id is used as primary key.

The database is run on a docker container for ease of use and described further in the "INSTALL.md".

### If I had more time

In the beginning of the development I was building the application with CRUD functionality in mind but ended up settling for only "add box" and "list boxes" as it would take increasingly more time to complete. Maybe this is a feature I will work on in my free time.

If I had more time i would develop a functional backend rather than a "blocking" one. And i would also implement HATEOAS support.

Currently in terms of quality and security I have not handled things such as constants as ex. usernames and passwords that would normally exist in .env files. This is bad practice and something I want to fix. I also wanted to deploy the application in a kubernetes cluster but didn't have the time available. While speaking in terms of security, I'm not pleased about the outcome of how i handle errors in the backend aspect. I guess I built the functionality first without implementing far too much error handling.

The last thing I can think of is that if I would have more time available is in case of scenarios without network access to backend API have a "spool" state in redux that keeps track of offline actions the user have performed and when network access later becomes available, perform said actions.