import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('first_name', 150).nullable()
      table.string('last_name', 150).nullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true)

      /**
       * Use reference table like this
       * Example
       */
      // table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      // table.integer('forum_id').notNullable().unsigned().references('id').inTable('forums')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true }).notNullable()
      // table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
