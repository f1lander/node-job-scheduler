# Node Job Scheduler

A job scheduler to create and manage jobs in nodejs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node-js v11~
MongoDB v3^
yarn 1.16.0
npm 6.10.2
```

### Installing

A step by step series of examples that tell you how to get a development env running

Steps:

```
Clone this repo and add the essentials env variables, lets create a .env file in the source and the following:
PORT=3000
MONGO_CONNECTION=mongodb://localhost:27017/agendadb
```
## Backend

for dev
```
yarn install
npm run dev
```

You will see a console message like this after a minute
![alt text](https://user-images.githubusercontent.com/5679878/65638302-0ea70180-dfa3-11e9-9ecb-fdaee2751826.png)

Inspect the agendash on localhost:3000/dash
![alt text](https://user-images.githubusercontent.com/5679878/65638462-6b0a2100-dfa3-11e9-94be-fbddb4e05fdb.png)

for debugging
```
npm run debug
Go to VS Code Debug and run the Typescrupt Server configurarion
```

for production build
```
npm run build
npm start
```

#Docker

```
docker-compose up
```

This will be hosted in the PORT that is defined in the .env, default is 8080

## Running the tests

Explain how to run the automated tests for this system

```
npm run test
```
No test for now, is wellcoming if anyone wants write test for this
## Built With

* [NodeJS](https://nodejs.org)
* [MongoDB](https://mongodb.com/)
* [Docker](https://docker.com/)

## Versioning

We use [Git](http://git.org/) for versioning. For the versions available

## Author

**Edax Uclés** - *Initial work* - [f1lander](https://github.com/f1lander)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
