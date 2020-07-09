
module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validation
    
        const save = async (req, res) => {
            const estado = { ...req.body }
    
           if(req.params.id) 
           estado.id = req.params.id
    
           try{
            existsOrError(estado.nome, 'Nome do estado não informado')

            existsOrError(estado.id_cidade, 'Id endereço não informado')
    
            const estadoFromDB = await app.db('estado')
            .where({ nome: estado.nome }).first()
            if(!estado.id){
                notExistsOrError(estadoFromDB, 'Estado já cadastrado')
            }
    
            }catch(msg){
            return res.status(400).send(msg)
            }
                
            if(estado.id){
                app.db('estado')
                .update(estado)
                .where({ id: estado.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            } else {
                app.db('estado')
                .insert(estado)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            }
        }
    
        const limit = 10 //index com paginação
        const get = async (req, res) => {
        const page = req.query.page || 1
    
        const result = await app.db('estado').count('id').first()
        const count = parseInt(result.count)
    
            app.db('estado')
            .select('id', 'nome')
            .limit(limit).offset(page * limit - limit)
            .then(estados => res.json({data: estados, count, limit}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

        //index com id
        const getById = (req, res) => {
            app.db('estado')
            .select('id', 'nome')
            .where({ id: req.params.id }).first()
            .then(estado => res.json({data: estado}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }
    
        return { save, get, getById }
    }