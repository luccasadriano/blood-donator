
module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validation
    
        const save = async (req, res) => {
            const cidade = { ...req.body }
    
           if(req.params.id) 
           cidade.id = req.params.id
    
           try{
            existsOrError(cidade.nome, 'Nome do cidade não informado')

            existsOrError(cidade.id_bairro, 'Id endereço não informado')
    
            const cidadeFromDB = await app.db('cidade')
            .where({ nome: cidade.nome }).first()
            if(!cidade.id){
                notExistsOrError(cidadeFromDB, 'Cidade já cadastrado')
            }
    
            }catch(msg){
            return res.status(400).send(msg)
            }
                
            if(cidade.id){
                app.db('cidade')
                .update(cidade)
                .where({ id: cidade.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            } else {
                app.db('cidade')
                .insert(cidade)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            }
        }
    
        const limit = 10 //index com paginação
        const get = async (req, res) => {
        const page = req.query.page || 1
    
        const result = await app.db('cidade').count('id').first()
        const count = parseInt(result.count)
    
            app.db('cidade')
            .select('id', 'nome')
            .limit(limit).offset(page * limit - limit)
            .then(cidades => res.json({data: cidades, count, limit}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

        //index com id
        const getById = (req, res) => {
            app.db('cidade')
            .select('id', 'nome')
            .where({ id: req.params.id }).first()
            .then(cidade => res.json({data: cidade}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }
    
        return { save, get, getById }
    }