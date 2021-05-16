const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080
const ULID = require('ulid')
const mockDb = require('./db.json')


//dados mockados pois n quero ter trabalho com banco agora
let usuarios = [...mockDb.usuarios]
let eventos  = [...mockDb.eventos]

//para json api
app.use(express.json())
//configura cors
app.use(cors())

app.get('/ping', (req, res) => {
  res.send('pong')
})

//criar usuário
app.post('/usuario',(req, res)=>{
    const { nome, email, senha } = req.body
    if(nome && email && senha){

        const usuario = {
            nome,
            email,
            senha,
            id: ULID.ulid()
        }

        usuarios.push(usuario)
        res.json(usuario)

    } else {
        res.status(400).json({ error: 'parâmetros inválidos' })
    }
})

//logar usuário
app.post('/login',(req, res)=>{
    const { email, senha } = req.body
    if(email && senha){
       const usuario =  usuarios.find(( u )=>( u.email === email ))
        if(usuario){
            if(usuario.senha === senha){
                res.json(usuario)
            } else {
                res.status(403).json({ error: 'credenciais inválidas' })
            }
        } else {
            res.status(403).json({ error: 'Usuário inexistente' })
        }

    } else {
        res.status(400).json({ error: 'parâmetros inválidos' })
    }
})


//criar eventos
app.post('/eventos',(req, res)=>{
    const { descricao, inicio, fim } = req.body
    if(descricao && inicio && fim){
        const novoEvento = {
            descricao,
            inicio,
            fim,
            id: ULID.ulid()
        }

        eventos.push(novoEvento)
        res.json(novoEvento)

    } else {
        res.status(400).json({ error: 'parâmetros inválidos' })
    }
})
//atualizar eventos
app.put('/eventos',(req, res)=>{
    const { id, ...campos } = req.body
    if(id){ 
       eventos = eventos.map((evento)=>{
           if(evento.id === id){
                const evento_modificado = { ...evento, ...campos }
                return evento_modificado
           } else {
               return evento
           }
       })
       res.json(eventos)

    } else {
        res.status(400).json({ error: 'parâmetros inválidos' })
    }
})


//remover eventos
app.delete('/eventos',(req, res)=>{
    const { id } = req.body
    if(id){
       eventos = eventos.filter((evento)=>(evento.id !== id))
       res.json(eventos)

    } else {
        res.status(400).json({ error: 'parâmetros inválidos' })
    }
})

//listar eventos
app.get('/eventos',(_, res)=>{
    res.json(eventos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})