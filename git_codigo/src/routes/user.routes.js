import {Router} from 'express'
const router= Router()
import * as userCtrl from '../controllers/user.controller'
import { authJwt, VerifySignup } from '../middlewares';

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdm,
    VerifySignup.checkRolesExiste
],userCtrl.createUser);

export default router;