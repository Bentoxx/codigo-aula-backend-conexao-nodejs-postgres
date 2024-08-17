import 'dotenv/config'

import express from 'express'
import { conexao } from './conexao'

const app = express()

app.use(express.json())

app.get('/', async(req, res) => {
	try {
		const resposta = await conexao.query('select * from empresas')
		return res.json(resposta.rows)
		
	} catch (error) {
		const erro = error as Error
		return res.status(400).json(erro.message) 
	}
})
app.get('/:id', async(req, res) => {
	const { id } = req.params
	try {
		const resposta = await conexao.query('select * from empresas where id = $1 and nome = $2', [id, 'Yahoo'])
		return res.json(resposta.rows)
		
	} catch (error) {
		const erro = error as Error
		return res.status(400).json(erro.message)
	}
})


app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`)
})
