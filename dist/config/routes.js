"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _controllers = require("../app/controllers");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.get('/', _controllers.page.index);
routes.get('/musics', _controllers.music.index);
routes.get('/musics/:id', _controllers.music.show);
routes.get('/musics/autocomplete/:music_name', _controllers.music.autocomplete);
routes.post('/musics', _controllers.music.store);