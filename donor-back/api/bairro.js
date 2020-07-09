
module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validation
    
        const save = async (req, res) => {
            const bairro = { ...req.body }
    
           if(req.params.id) 
           bairro.id = req.params.id
    
           try{
            existsOrError(bairro.nome, 'Nome do bairro não informado')

            existsOrError(bairro.id_endereco, 'Id endereço não informado')
    
            const bairroFromDB = await app.db('bairro')
            .where({ nome: bairro.nome }).first()
            if(!bairro.id){
                notExistsOrError(bairroFromDB, 'Bairro já cadastrado')
            }
    
            }catch(msg){
            return res.status(400).send(msg)
            }
                
            if(bairro.id){
                app.db('bairro')
                .update(bairro)
                .where({ id: bairro.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            } else {
                app.db('bairro')
                .insert(bairro)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            }
        }
    
        const limit = 10 //index com paginação
        const get = async (req, res) => {
        const page = req.query.page || 1
    
        const result = await app.db('bairro').count('id').first()
        const count = parseInt(result.count)
    
            app.db('bairro')
            .select('id', 'nome')
            .limit(limit).offset(page * limit - limit)
            .then(bairros => res.json({data: bairros, count, limit}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

        //index com id
        const getById = (req, res) => {
            app.db('bairro')
            .select('id', 'nome')
            .where({ id: req.params.id }).first()
            .then(bairro => res.json({data: bairro}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }
    
        return { save, get, getById }
    }