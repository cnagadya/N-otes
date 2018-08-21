"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: "Kindly enter the note title"
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  actionable: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Notes", NotesSchema);
