"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.down = down;
exports.up = up;

async function up(knex) {
  await knex.schema.createTable('musics', table => {
    table.increments('id');
    table.string('name', 155).notNullable();
    table.text('description', 255).notNullable();
    table.integer('year', 4).notNullable();
    table.timestamps();
  });
}

async function down(knex) {
  await knex.schema.dropTable('musics');
}