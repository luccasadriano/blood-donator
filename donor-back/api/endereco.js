
module.exports = app => {

const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) => {
        const endereco = { ...req.body }

       if(req.params.id) 
       endereco.id = req.params.id

       try{
        existsOrError(endereco.cep, 'CEP não informado')
        existsOrError(endereco.logradouro, 'Logradouro não informado')
        existsOrError(endereco.numero, 'Numero não informado')
        existsOrError(endereco.complemento, 'Numero não informado')

        existsOrError(endereco.id_doadores, 'Id doador não informado')
        existsOrError(endereco.id_agendamento, 'Id agendamento não informado')

        const enderecoFromDB = await app.db('endereco')
        .where({ cep: endereco.cep }).first()
        if(!endereco.id){
            notExistsOrError(enderecoFromDB, 'Endereço já cadastrado')
        }

        }catch(msg){
        return res.status(400).send(msg)
        }
            
        if(endereco.id){
            app.db('endereco')
            .update(endereco)
            .where({ id: endereco.id })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        } else {
            app.db('endereco')
            .insert(endereco)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
    }

    const limit = 10 //index com paginação
    const get = async (req, res) => {
    const page = req.query.page || 1

    const result = await app.db('endereco').count('id').first()
    const count = parseInt(result.count)

        app.db('endereco')
        .select('id', 'cep', 'logradouro', 'numero', 'complemento', 'id_doadores', 'id_agendamento')
        .limit(limit).offset(page * limit - limit)
        .then(enderecos => res.json({data: enderecos, count, limit}))//add o map pra alterar as colunas dos dados
        .catch(err => res.status(500).send(err))
    }

        //index com id
        const getById = (req, res) => {
            app.db('endereco')
            .select('id', 'cep', 'logradouro', 'numero', 'complemento', 'id_doadores', 'id_agendamento')
            .where({ id: req.params.id }).first()
            .then(endereco => res.json({data: endereco}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }
    

    return { save, get,  getById}
}