"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

async function seed(knex) {
  // Deletes ALL existing entries
  await knex("musics").del(); // Inserts seed entries

  await knex("musics").insert([{
    name: "Ayo",
    description: 'Ayo, Chris Brown & Tiga',
    year: 2016,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "Hello",
    description: 'Hello, From Adele',
    year: 2015,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "Steal My Girl",
    description: 'Steal My Girl, From One Direction',
    year: 2012,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "What do you mean",
    description: 'What do you mean, From Justin Bieber',
    year: 2017,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "Monster",
    description: 'Monster, From Rihana & Emminem',
    year: 2009,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "Drunk In Love",
    description: 'Drunk In Love, From Beyonce & Jay Z',
    year: 2011,
    created_at: new Date(),
    updated_at: new Date()
  }, {
    name: "Tears and Rain",
    description: 'Tears And Rain, From James Blunt',
    year: 2009,
    created_at: new Date(),
    updated_at: new Date()
  }]);
}

;