import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    let { page, limit } = request.qs()
    page = page || 1
    limit = limit || 10

    try {
      const users = await User.query().paginate(page, limit)

      return response.status(200).json({
        users
      })
    } catch (error) {
      console.log(error)
    }
  }
}
