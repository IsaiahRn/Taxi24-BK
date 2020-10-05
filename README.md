[![Build Status](https://travis-ci.org/IsaiahRn/Taxi24-BK.svg?branch=development)](https://travis-ci.org/IsaiahRn/Taxi24-BK)
[![Maintainability](https://api.codeclimate.com/v1/badges/f6d69ab85f7597f10d49/maintainability)](https://codeclimate.com/github/IsaiahRn/Taxi24-BK/maintainability)

# Taxi24-BK
Taxi24 is a new startup based in Kigali.

## Vision
We would like to disrupt the taxi industry in Rwanda by providing a white-label solution to the existing taxi companies and hotels.

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](https://nodejs.org/)
- [postgres](https://www.postgresql.org/) - [sequelize(ORM)](https://sequelize.org/)
- [Express.js](https://expressjs.com).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](https://nodejs.org/) automatically comes with npm.


#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Run migrations and seed data
  > Run the command below
  ```shell
  $ npm run migrate
  $ npm run seed
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```

- Create your own environment variables(`.env`) as indicated in `.env.example`

- Use `http://localhost:3000` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                                                        |
| ------ | --------------------------------------- | ---------------------------------------------------------------  |
| GET    | Get all drivers                         | `/api/v1/drivers`                                                |
| GET    | Get all available drivers               | `/api/v1/drivers/available`                                      |
| GET    | Get all available drivers in 3 Km       | `/api/v1/drivers/availableNear?latitude=1.9006&longitude=30.0759`|
| GET    | Get a driver by ID                      | `/api/v1/drivers/:ID`                                            |
| POST   | Create a new trip                       | `/api/v1/trips`                                                  |
| PUT    | Complete a trip                         | `/api/v1/trips/complete/:ID`                                     |
| GET    | Get a list of all active trips          | `/api/v1/trips/active`                                           |
| GET    | Get a list of all riders                | `/api/v1/riders/`                                                |
| GET    | Get a specific rider by ID              | `/api/v1/riders/:ID`                                             |
| GET    | Get a list of 3 closest riders          | `/api/v1/riders/:name`                                           |

## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```


## Author

- Isaie Runoro
