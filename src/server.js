const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))


//utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar caminhos da aplicação
//página inicial
// req: requisição
// res: resposta

server.get("/", (req, res) => {
     return res.render("index.html", {tittle: "Um título"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// Ligar o servidor

server.listen(3000)