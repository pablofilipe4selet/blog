const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const posts = [
    { id: 1, title: "Post 1", content: "Conteúdo do Post 1" },
    { id: 2, title: "Post 2", content: "Conteúdo do Post 2" }
]

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('/posts', (req, res) => {
    const newPost = req.body
    posts.push(newPost)
    res.status(201).json(newPost)
})

app.listen(port, () => {
    console.log(`API simulada rodando em http://localhost:${port}`)
})