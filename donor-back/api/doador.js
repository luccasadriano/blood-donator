const bcrypt = require ('bcrypt')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation 

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)

        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
       const doador = { ...req.body }
       if(req.params.id) doador.id = req.params.id

       try {
        existsOrError(doador.cpf, 'CPF não informado')
        existsOrError(doador.nome, 'Nome não informado')
        existsOrError(doador.email, 'E-mail não informado')
        existsOrError(doador.data_nascimento, 'data de nascimento não informado')
        existsOrError(doador.senha, 'Senha não informado')
        existsOrError(doador.confirmaSenha, 'Confirmação de Senha inválida')
        equalsOrError(doador.senha, doador.confirmaSenha, 
            'Senhas não conferem')

            const doadorFromDB = await app.db('doadores')
            .where({ cpf: doador.cpf }).first()

            if(!doador.id){
                notExistsOrError(doadorFromDB, 'Doador já cadastrado')
            }

        } catch(msg){
            return res.status(400).send(msg)
       }

       doador.senha = encryptPassword(doador.senha)
       delete doador.confirmaSenha

       if(doador.id){
           app.db('doadores')
           .update(doador)
           .where({ id: doador.id })
           .then(_ => res.status(204).send())
           .catch(err => res.status(500).send(err))
       } else {
           app.db('doadores')
           .insert(doador)
           .then(_ => res.status(204).send())
           .catch(err => res.status(500).send(err))
       }
    }

    //index
    const get = (req, res) => {
        app.db('doadores')
        .select('id', 'cpf', 'nome', 'email', 'data_nascimento', 'senha')
        .then(doadores => res.json({data:doadores}))//add o map pra alterar as colunas dos dados
        .catch(err => res.status(500).send(err))
    }

        //index com id
        const getById = (req, res) => {
            app.db('doadores')
            .select('cpf', 'nome', 'email', 'data_nascimento')
            .where({ id: req.params.id })
            .first()
            .then(doador => res.json({data:doador}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

    return { save, get, getById }
}