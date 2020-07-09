const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const validateToken = require('./validateToken')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.senha){
            return res.status(400).send('Informe email e senha!')
        }
        const clinica = await app.db('clinicas-hospitais')
        .where({email: req.body.email})
        .first()

        if (!clinica) return res.status(400).send('Usuário não encontrado!')
        const isMatch = bcrypt.compareSync(req.body.senha, clinica.senha)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: clinica.id,
            cnpj: clinica.cnpj,
            razao_social: clinica.razao_social,
            email: clinica.email,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    // validateToken() 
    //     const validateToken = async (req, res) => {
    //     const doadorData = req.body || null
    //     try{
    //         if(doadorData){
    //             if(new Date(token.exp * 1000) > new Date()){
    //                 return res.send(true)
    //             }
    //         }
    //     }catch(e) {
    //         //problema com o token
    //     }

    //     res.send(false)
    // }
   

    return { signin }
}