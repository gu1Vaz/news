'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
                                      .onUpdate('CASCADE')
                                      .onDelete('CASCADE')
      table.string('value', 76).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('feedbacks')
  }
}

module.exports = FeedbackSchema
