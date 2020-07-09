
module.exports = app => {
    
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) => {
        const agendamento = { ...req.body }

       if(req.params.id) agendamento.id = req.params.id 

       try {
        existsOrError(agendamento.peso, 'Peso não informado')
        existsOrError(agendamento.tipo_sanguineo, 'Tipo sanguineo não informado')
        existsOrError(agendamento.sexo, 'sexo de nascimento não informado')
        existsOrError(agendamento.bebidas_alcoolicas, 'Consome bebidas alcoolicas não informado')
        existsOrError(agendamento.usuario_tabaco, 'Usuario de tabaco não informado')
        existsOrError(agendamento.drogas_ilicitas, 'Usuario de drogas ilicitas não informado')
        existsOrError(agendamento.doenca_infecciosas, 'Possuem doenças infecciosas não informado')
        existsOrError(agendamento.nome_doenca, 'Nome da doença não informado')
        existsOrError(agendamento.data_agendamento, 'Data do agendamento não informado')
        existsOrError(agendamento.horas_doacao, 'Horario da doação não informado')                
        existsOrError(agendamento.id_doadores, 'Id doador não informado')

        } catch(msg){
            return res.status(400).send(msg)
       }

        if(agendamento.id){
            app.db('agendamentos')
            .update(agendamento)
            .where({ id: agendamento.id })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        } else {
            app.db('agendamentos')
            .insert(agendamento)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
    }

    const limit = 10 //usado para paginação //não esquecer de passar as rotas
    const get = async (req, res) => {
    const page = req.query.page || 1

    const result = await app.db('agendamentos').count('id').first()
    const count = parseInt(result.count)

        app.db('agendamentos')
        .select('id', 'peso', 'tipo_sanguineo', 'sexo', 'bebidas_alcoolicas', 'usuario_tabaco', 'drogas_ilicitas', 'doenca_infecciosas',
        'nome_doenca', 'data_agendamento', 'horas_doacao')
        .limit(limit).offset(page * limit - limit)
        .then(agendamentos => res.json({data: agendamentos, count, limit}))//add o map pra alterar as colunas dos dados
        .catch(err => res.status(500).send(err))
    }
    
    //index com id
    const getById = (req, res) => {
        app.db('agendamentos')
        .select('id', 'peso', 'tipo_sanguineo', 'sexo', 'bebidas_alcoolicas', 'usuario_tabaco', 'drogas_ilicitas', 'doenca_infecciosas',
        'nome_doenca', 'data_agendamento', 'horas_doacao')
        .where({ id: req.params.id }).first()
        .then(agendamento => res.json({data: agendamento}))//add o map pra alterar as colunas dos dados
        .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('agendamentos')
            .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'O agendamento não existe')
            } catch(msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()

        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}