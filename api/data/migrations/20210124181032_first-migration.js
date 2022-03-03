exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
    })
    .createTable("plants", (tbl) => {
      tbl.increments("plant_id");
      tbl.string("plant_name").notNullable();
      tbl.string("plant_species").notNullable();
      tbl.string("water_req").notNullable();
      tbl.string("light_req").notNullable();
      tbl.string("img_url");
    })
    .createTable("user_plants", (tbl) => {
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("plant_id")
        .unsigned()
        .notNullable()
        .references("plant_id")
        .inTable("plants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
