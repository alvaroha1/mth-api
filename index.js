// THIS IS EXECUTED PERIODICALLY BY CRON
require('dotenv').load();
console.log(process.env);
const func1 = require('./api/api');
const func2 = require('./algorithm/algorithm');
const func3 = require('./db/db');

// STEP 1: Fetch API Data
const x1 = func1();

// STEP 2: Apply Algorythm
const x2 = func2(x1);

// STEP 3: Write to Database
const x3 = func3(x2);
