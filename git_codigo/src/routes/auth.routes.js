import {Router} from 'express'
import * as authCtrl from '../controllers/auth.controller'
import { VerifySignup } from '../middlewares'

const router= Router()



router.post('/signin',[VerifySignup.checkDuplicateUsernameOrEmail,VerifySignup.checkRolesExiste], authCtrl.signIn)
router.post('/signup',authCtrl.signUp)

export default router;