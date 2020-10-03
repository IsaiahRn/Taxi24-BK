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
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```
- Use `http://localhost:3000` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                          |
| ------ | --------------------------------------- | ---------------------------------  |
| GET    | Get all drivers                         | `/api/drivers`                     |
| GET    | Get all available drivers               | `/api/drivers/available`           |
| GET    | Get all available drivers in 3 Km       | `/api/drivers/availableNear/Gisozi`|
| GET    | Get a driver by ID                      | `/api/drivers/1`                   |
| POST   | Create a new trip                       | `/api/trips`                       |
| PUT    | Complete a trip                         | `/api/trips/complete/`             |
| GET    | Get a list of all active trips          | `/api/trips/active`                |
| GET    | Get a list of all riders                | `/api/riders/`                     |
| GET    | Get a specific rider by ID              | `/api/riders/1`                    |
| GET    | Get a list of 3 closest riders          | `/api/riders/1`                    |

## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```


## Author

- Isaie Runoro