## Application Design

To structure the project I decided I would separate the different components of the application into three, frontend, backend as well as database. I've included a segment of the 'PLAN.md' to elaborate my thoughts on how i deployed the application. As I wanted to make the application available both locally aswell as remote.

### General design principles
bla bla bla

### Frontend
The frontend is a classic React Frontend that takes use of React redux for statefullness as well as operators(?)

### Backend
The backend is built with Java and specifically the Java Reactive Extension, more commonly known as JavaRX or RXjava. This was a challenge for me as I'm not that experienced with Java, Though I'm very familiar with C# (Similiar languages) the challenge was not only to switch into Java but to switch from Object Oriented Programming into Functional Programming.

After further research about JavaRX I grew to love it, Programming with it was like using a pensel on a canvas.

### Database
The database is hosted on a private host as I wanted persistence and also didn't want to use a hacky java plugin/framework etc. Therefore when testing locally, you need to have a valid internet connection. I've included a database schema(?) so it's not just a "black box" for the tester.

### Deployment
https
certs
multiple hosts

If I had more time I would convert my application into docker images to be kubernetes compliant as it's widely used in the corporate world.
