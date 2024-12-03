import { Router } from 'express'

const rotas = Router()

rotas.get('/', (req, res) => {
    res.json('SERVIDOR OK')
})

export default rotas