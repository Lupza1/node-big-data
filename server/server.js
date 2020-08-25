const express = require('express');
const app = express();
const path = require('path');

var PORT = 5555

app.listen(PORT, function() {
  console.log('El server corre en el puerto: ' +PORT)
})

app.use(express.static(path.join(__dirname, '../public')));