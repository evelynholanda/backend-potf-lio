const express = require ("express")
const path = require("path")

//criando instancia
const app = express()

//chamando a rota
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))

})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))

})

//Usando as rotas na aplicacao
app.use(router)


app.listen(3333, ()=>{
    console.log("SERVIDOR RODANDO")
})
