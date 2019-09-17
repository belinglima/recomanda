'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageProdutcSchema extends Schema {
  up () {
    this.create('image_produtcs', (table) => {
      table.increments()
      table
      .integer('product_id').unsigned().references('id').inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('path').notNullable()
    table.timestamps()
    })
  }

  down () {
    this.dropIfExists('image_produtcs')
  }
}

module.exports = ImageProdutcSchema
