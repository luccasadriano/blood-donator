
module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validation
    
        const save = async (req, res) => {
            const telefone = { ...req.body }
    
           if(req.params.id) 
           telefone.id = req.params.id
    
           try{
            existsOrError(telefone.numero, 'Numero telefone não informado')

            existsOrError(telefone.id_doadores, 'Id doador não informado')
            existsOrError(telefone.id_agendamento, 'Id agendamento não informado')
    
            const telefoneFromDB = await app.db('telefone')
            .where({ numero: telefone.numero }).first()
            if(!telefone.id){
                notExistsOrError(telefoneFromDB, 'telefone já cadastrado')
            }
    
            }catch(msg){
            return res.status(400).send(msg)
            }
                
            if(telefone.id){
                app.db('telefone')
                .update(telefone)
                .where({ id: telefone.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            } else {
                app.db('telefone')
                .insert(telefone)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            }
        }
    
        const limit = 10 //index com paginação
        const get = async (req, res) => {
        const page = req.query.page || 1
    
        const result = await app.db('telefone').count('id').first()
        const count = parseInt(result.count)
    
            app.db('telefone')
            .select('id', 'numero')
            .limit(limit).offset(page * limit - limit)
            .then(telefones => res.json({data: telefones, count, limit}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

        //index com id
        const getById = (req, res) => {
            app.db('telefone')
            .select('id', 'nome')
            .where({ id: req.params.id }).first()
            .then(telefone => res.json({data: telefone}))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }
    
        return { save, get, getById }
    }