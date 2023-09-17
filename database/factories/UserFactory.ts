import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName()
  }
}).build()
