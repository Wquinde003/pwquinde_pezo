import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signIn =async (req, res) => {
    
    res.json('inicio de sesion')
}

export const signUp =async (req, res) => {

    const {username, email, password, roles} = req.body;

    const newUser = new User ({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (Role){
        const foundRoles =await Role.find({name:{in: roles}})
        newUser.roles= foundRoles.map (role =>  role._id)
    }

    const saveUser = await newUser.save()

    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400
    })

    res.status(200).json({token})
}