const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen( ()=> {
  console.log(`todo list RESTful API server started on:  ${port}`);
});
