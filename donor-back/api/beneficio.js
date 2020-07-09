module.exports = app => {


const limit = 10 //usado para paginação //não esquecer de passar as rotas
const get = async (req, res) => {
    const page = req.query.page || 1

    const result = await app.db('beneficios').count('id').first()
    const count = parseInt(result.count)

    app.db('beneficios')
        .select('id', 'nome_beneficio', 'quantidade_agendamento', 'pontos', 'nome_produto', 'valor_produto')
        .limit(limit).offset(page * limit - limit)
        .then(beneficio => res.json({data: beneficio, count, limit }))
        .catch(err => res.status(500).send(err))
    }
    return { get }
}