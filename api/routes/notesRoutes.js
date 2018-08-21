"use strict";

module.exports = function(app) {
  const notes = require("../controllers/notesController");

  app
    .route("/notes")
    .get(notes.list_all_notes)
    .post(notes.create_note);
  app.route("/notes/:noteId").get(notes.find_note);
};
