import  Express  from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import authRoutes from './routes/auth.routes' 
import productsRoutes from './routes/products.routes'
import { createRoles } from './libs/initialSetup'

const app = Express()
createRoles();

app.set('pkg',pkg)

app.use(morgan('dev'));

app.use(Express.json());

app.get('/',(req,res)=>{
    res.json({
        name: app.get('pkg').name,
        autor: app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
            })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes);

export default app;