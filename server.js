const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Note = require("api/models/notesModel"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/NotesDB");

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./api/routes/notesRoutes');
routes(app);
app.use(bodyParser.json());
app.listen(() => {
  console.log(`todo list RESTful API server started on:  ${port}`);
});
