"use strict";
const mongoose = require("mongoose"),
  Note = mongoose.model("Notes");
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
  Note.findById(req.params.noteId, function(err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

exports.update_note = function(req, res) {
  Note.findOneAndUpdate(
    { _id: req.params.notedId },
    req.body,
    { new: true },
    function(err, note) {
      if (err) res.send(err);
      res.json(note);
    }
  );
};

exports.delete_note = function(req, res) {
  Note.remove({ _id: req.params.noteId }, function(err, note) {
    if (err) res.send(err);
    res.json({ message: "Note successfully deleted" });
  });
};
