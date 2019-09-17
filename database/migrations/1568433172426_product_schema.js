'use strict'
 
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.decimal('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('products')
  }
}

module.exports = ProductSchema
