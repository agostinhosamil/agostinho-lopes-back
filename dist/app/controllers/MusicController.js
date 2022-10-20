"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicController = void 0;

var _Music = require("../models/Music");

class MusicController {
  async index(req, res) {
    const list = await _Music.Music.all();
    return res.send(list);
  }

  async show(req, res) {
    const music = await _Music.Music.findById(req.params.id);
    return res.send(music);
  }

  async autocomplete(req, res) {
    const musics = await _Music.Music.search({
      name: req.params.music_name,
      description: req.params.music_name
    });
    return res.send(musics);
  }

  async store(req, res) {
    const {
      music: musicData
    } = req.body;
    const music = new _Music.Music(musicData);
    const saveResult = await music.save();

    if (!saveResult) {
      return res.status(400).send();
    }

    return res.send(music);
  }

}

exports.MusicController = MusicController;