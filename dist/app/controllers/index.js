"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = exports.music = void 0;

var _MusicController = require("./MusicController");

var _PageController = require("./PageController");

const music = new _MusicController.MusicController();
exports.music = music;
const page = new _PageController.PageController();
exports.page = page;