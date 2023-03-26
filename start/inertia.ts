/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors')
  },
  flash: ({ session }) => ({
    message: session.flashMessages.get('message'),
  }),
  user: ({ auth }) => (auth.isLoggedIn ? auth.user : null),
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
