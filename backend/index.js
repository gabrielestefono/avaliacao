const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.post('/', (req, res) => {
    const { nota } = req.body;
    if (!nota) {
        return res.status(400).json({ error: 'Nota não fornecida' })
    }
    return res.status(201).json({ message: 'Nota criada com sucesso', nota })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})