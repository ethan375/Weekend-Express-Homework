const express = require('express');
const app = express();

require('./db/db.js')



app.listen(3000, ()=>{
  console.log("Server listening on port 3000");
});