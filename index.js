const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

const games =[
    {id: 1, name: "Witcher 3", price: 29.99},
    {id: 2, name: "Minecraft", price: 35.99},
    {id: 3, name: "Valorant", price: 0},
    {id: 4, name: "Satisfactory(zavod)", price: 35.00},
    {id: 5, name: "Warcraft", price: 0},
    {id: 6, name: "Roblox", price: 0},
    {id: 7, name: "Dome keeper", price: 17.99},
]
app.get('/games', (req, res) =>{
    res.send(games)
})

app.get('/games/:id',(req,res) =>{
    if(typeof games[req.params.id - 1] === 'undefined'){
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id - 1])
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(port,()=> {
    console.log(`API up at: http://localhost:${port}`)
})