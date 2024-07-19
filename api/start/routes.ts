/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const EmployeesController = () => import('#controllers/employees_controller')
import router from '@adonisjs/core/services/router'

const SessionsController = () => import('#controllers/sessions_controller')

router.get('sessions', [SessionsController, 'index'])

router.get('employees', [EmployeesController, 'index'])
