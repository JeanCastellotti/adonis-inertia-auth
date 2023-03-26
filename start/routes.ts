/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.inertia('/', 'Home')

Route.get('/dashboard', async ({ inertia }) => {
  return inertia.render('Dashboard')
}).middleware('auth')

Route.get('/login', async ({ inertia }) => {
  return inertia.render('Auth/Login')
})

Route.post('/login', async ({ auth, request, response }) => {
  const { email, password, remember } = request.only(['email', 'password', 'remember'])
  await auth.attempt(email, password, remember)
  return response.redirect('/')
})

Route.post('/logout', async ({ auth, response, session }) => {
  await auth.logout()
  session.flash('message', 'You have been successfully logged out')
  return response.redirect('/login')
}).middleware('auth')
