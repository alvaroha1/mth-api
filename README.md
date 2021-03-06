# MTH API
Project created from scratch with [Pedro Tas Schindler]( https://github.com/ps3611) and [Steven van Asbeck]( https://github.com/stevenspyramid).
You will need to run the [MTH Client]( https://github.com/alvaroha1/mth-client), [MTH API]( https://github.com/alvaroha1/mth-api) and [MTH Server]( https://github.com/alvaroha1/mth-server).

## Table of contents
* [Motivation](#motivation)
* [Tech Stack](#tech-stack)
* [Screenshots](#screenshots)
* [Getting started](#getting-started)
* [Additional Features that might be implemented on a later date](#additional-features-that-might-be-implemented-on-a-later-date)
* [Authors](#authors)
* [License](#license)

## Motivation
We realized there are multiple entry barriers to operate in the real-estate market. One of them is the existence of several data sources.
With MTH we wanted to create a platform to aggregate all the data and provide a layer of data analysis over the different opportunities.
Our client features a filter, a map and different metrics to help the user in their purchase decision.

## Tech Stack
* [Express.js](https://github.com/koajs/koa) - web framework for Node.js.
* [MongoDB](https://github.com/mongodb/mongo) - No relational database.
* [Mongoose](https://github.com/Automattic/mongoose) - Layer for mongodb.

## Screenshots


## Getting started

1. Clone the repo

```
$ git clone https://github.com/alvaroha1/mth-api.git
$ cd mth-api
```

2. Install dependencies
```
$ npm install
```
3. Start MongoDB in your system.

4. Run the server to fetch data from the APIs
```
$ npm start
```

This will fetch the latest data from the APIs and store them in a MongoDB database in your computer.

## Additional Features that might be implemented on a later date
* Tests
* User Management system
* More relevant metrics
* Other APIs

## Authors
* Peter Tas Schindler  - [Github]( https://github.com/ps3611) - [LinkedIn](https://www.linkedin.com/in/schindlerpeter/)
* Steven Van Asbeck [GitHub](https://github.com/stevenspyramid) - [Linkedin](https://www.linkedin.com/in/steven-van-asbeck/)
* Alvaro Hernandez Assens [GitHub](https://github.com/alvaroha1) - [Linkedin](https://www.linkedin.com/in/alvaroha/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/marcoantonioghiani01/xest-client/blob/master/LICENSE) file for details
