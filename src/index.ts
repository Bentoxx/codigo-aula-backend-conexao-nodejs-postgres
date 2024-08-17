import 'dotenv/config'

import express from 'express'
import { conexao } from './conexao'

const app = express()

app.use(express.json())

app.get('/', async(req, res) => {
	const resposta = await conexao.query('select * from empresas')


	return res.json(resposta.rows)
})


app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`)
})
