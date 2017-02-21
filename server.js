/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

const express = require('express');
const graphiql = require('express-graphiql-toolbox');
require('dotenv');

const app = express();

// You can use any of the 2 versions
app.use('/', graphiql({ endpoint: process.env.endpoint | 'http://localhost:8081/' }));
console.log('Listening to  on ' + process.env.endpoint | 'http://localhost:8081/');
app.listen(process.env.local_port | 8080, () => console.log('Started on http://localhost:8080/'));
