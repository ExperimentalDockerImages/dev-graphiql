/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

const express = require('express');
const graphiql = require('express-graphiql-toolbox');

const app = express();

// You can use any of the 2 versions
app.use('/', graphiql({ endpoint: 'http://memoria.dev:81' }));
app.listen(8080, () => console.log('Started on http://localhost:8080/'));
