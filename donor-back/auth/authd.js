const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const validateToken = require('./validateToken')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.senha){
            return res.status(400).send('Informe email e senha!')
        }
        const doador = await app.db('doadores')
        .where({email: req.body.email})
        .first()

        if (!doador) return res.status(400).send('Usuário não encontrado!')
        const isMatch = bcrypt.compareSync(req.body.senha, doador.senha)
        if(!isMatch) return res.status(401).send('Email/Senha inválodos')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: doador.id,
            cpf: doador.cpf,
            nome: doador.nome,
            email: doador.email,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }
    const validateToken = async (req, res) => {
        const doadorData = req.body || null
        try{
            if(doadorData){
                if(new Date(token.exp * 1000) > new Date()){
                    return res.send(true)
                }
            }
        }catch(e) {
            //problema com o token
        }

        res.send(false)
    }
   

    return { signin, validateToken }
}