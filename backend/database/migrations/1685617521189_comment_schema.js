'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('materia_id').unsigned().references('id').inTable('materias')
                                      .onUpdate('CASCADE')
                                      .onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users')
                                      .onUpdate('CASCADE')
                                      .onDelete('CASCADE')
      table.string('value', 456).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
