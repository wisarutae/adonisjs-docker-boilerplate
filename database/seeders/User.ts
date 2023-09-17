import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from '../factories/UserFactory'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await UserFactory.createMany(500)
  }
}
