'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MateriaSchema extends Schema {
  up () {
    this.create('materias', (table) => {
      table.increments()
      table.string('route_id',100).notNullable();

      table.string('image_url',256).notNullable();
      table.string('vet_images',1000).nullable();
      table.string('vet_links',500).nullable();
      table.string('title', 254).notNullable()
      table.string('subtitle', 254).notNullable()

      table.string('intro', 900).notNullable()
      table.string('dev', 2500).notNullable()
      table.string('coc', 900).notNullable()

      table.string('creador', 25).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriaSchema
