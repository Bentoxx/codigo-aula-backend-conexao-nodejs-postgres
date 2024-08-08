import 'dotenv/config'

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	return res.send('Ok')
})


app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`)
})
