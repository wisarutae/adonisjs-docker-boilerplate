import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import { Exception } from '@adonisjs/core/build/standalone'

export default class AuthController {
  public async login({ response, request, auth }: HttpContextContract) {
    const email = request.input("email")
    const password = request.input("password")

    try {
      const user = await User.query()
        .where('email', email)
        .first()

      if (user && await Hash.verify(user?.password!, password)) {
        const token = await auth.use('jwt').login(user)
        return response.status(200).json({
          status: 200,
          message: 'success',
          data: { user, token }
        })
      }

    } catch (error) {
      if (error.status && error.message) {
        return response.status(error.status).json({
          status: error.status,
          message: error.message
        })
      } else {
        return response.status(500).json({
          status: 500,
          message: 'Internal Server Error'
        })
      }
    }

    return response.status(401).json({
      status: 401,
      message: 'Username or Password is incorrect'
    })
    // const token = await auth.use("api").attempt(email, password, {
    //   expiresIn: "10 days",
    // })

    // return token.toJSON()
  }

  public async register({ request, response, auth }: HttpContextContract) {
    const email = request.input("email")
    const password = request.input("password")
    const firstName = request.input("first_name")
    const lastName = request.input("last_name")

    try {
      const findUser = await User.findBy('email', email)
      if (findUser) {
        throw new Exception('This email has already registered.', 400)
      }

      const newUser = new User()
      newUser.email = email
      newUser.password = password
      // newUser.first_name = firstName
      // newUser.last_name = lastName
      await newUser.save()

      const token = await auth.use("jwt").login(newUser)
      // const token = await auth.use("api").login(newUser, {
      //   expiresIn: "10 days",
      // })

      return response.status(200).json({
        status: 200,
        message: 'success',
        data: { user: newUser, token }
      })
    } catch (error) {
      if (error.status && error.message) {
        return response.status(error.status).json({
          status: error.status,
          message: error.message
        })
      } else {
        return response.status(500).json({
          status: 500,
          message: 'Internal Server Error'
        })
      }
    }
  }
}
