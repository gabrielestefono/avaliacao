const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.post('/', (req, res) => {
    const { rating } = req.body;
    if (!rating) {
        return res.status(400).json({ error: 'rating não fornecida' })
    }
    return res.status(201).json({ message: 'rating criada com sucesso', rating })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})