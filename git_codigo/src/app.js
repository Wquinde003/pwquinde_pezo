import  Express  from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import productsRoutes from './routes/products.routes'

const app = Express()



app.set('pkg',pkg)

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({
        name: app.get('pkg').name,
        autor: app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
            })
})

app.use('/products',productsRoutes)

export default app;