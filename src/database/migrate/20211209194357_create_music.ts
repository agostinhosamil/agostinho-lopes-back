import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable ('musics', (table: Knex.CreateTableBuilder) => {
    table.increments ('id')
    table.string ('name', 155).notNullable ()
    table.text ('description', 255).notNullable ()
    table.integer ('year', 4).notNullable ()
    table.timestamps ()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable ('musics')
}
