import { ROLES } from "../models/Role"
import User from "../models/User"

export const checkDuplicateUsernameOrEmail = async(req,res, next )=> {
    const user = await User.findOne({username : req.body.username})

    if (user) return res.status(400).json({message:'el usuario ya existe'})

    const email = await Email.findOne({email:req.body.username})

    if (email) return res.status(400).json({message:'el mail ya existe'})

    next();
}

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