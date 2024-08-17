import 'dotenv/config'

import express from 'express'
import { client } from './conexao'

const app = express()

app.use(express.json())

app.get('/', async(req, res) => {
	await client.connect()
	const resposta = await client.query('select * from empresas')
	await client.end()

	return res.json(resposta.rows)
})


app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`)
})
