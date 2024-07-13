/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const SessionsController = () => import('#controllers/sessions_controller')

router.get('sessions', [SessionsController, 'index'])
