"use strict";
const mongoose = require("mongoose");

Note = mongoose("Notes");
exports.list_all_notes = function(req, res) {
  Note.find({}, function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

exports.create_note = function(req, res) {
  let new_note = new Note(req.body);

  new_note.save(function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

exports.find_note = function(req, res) {
  Note.findById(req.params.notedId, function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};
