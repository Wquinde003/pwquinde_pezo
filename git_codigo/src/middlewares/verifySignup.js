import { ROLES } from "../models/Role"

export const checkRolesExiste = (req,res,next)=> {
    if (req.body.roles){
        for (let i =0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                res.status(401).json({
                    message: `Role ${req.body.roles[i]}no existe`
                })
            }
        }
    }
    next();
}