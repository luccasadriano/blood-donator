const bcrypt = require ('bcrypt')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation 

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)

        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
       const clinicaHospital = { ...req.body }
       if(req.params.id) clinicaHospital.id = req.params.id

       try {
        existsOrError(clinicaHospital.cnpj, 'CPNJ não informado')
        existsOrError(clinicaHospital.razao_social, 'Razão Social não informado')
        existsOrError(clinicaHospital.email, 'E-mail não informado')
        existsOrError(clinicaHospital.senha, 'Senha não informado')
        existsOrError(clinicaHospital.confirmaSenha, 'Confirmação de Senha inválida')
        equalsOrError(clinicaHospital.senha, clinicaHospital.confirmaSenha, 
            'Senhas não conferem')

            const clinicaHospitalFromDB = await app.db('clinicas-hospitais')
            .where({ cnpj: clinicaHospital.cnpj }).first()

            if(!clinicaHospital.id){
                notExistsOrError(clinicaHospitalFromDB, 'Clinica ou hospital já cadastrado')
            }

        } catch(msg){
            return res.status(400).send(msg)
       }

       clinicaHospital.senha = encryptPassword(clinicaHospital.senha)
       delete clinicaHospital.confirmaSenha

       if(clinicaHospital.id){
           app.db('clinicas-hospitais')
           .update(clinicaHospital)
           .where({ id: clinicaHospital.id })
           .then(_ => res.status(204).send())
           .catch(err => res.status(500).send(err))
       } else {
           app.db('clinicas-hospitais')
           .insert(clinicaHospital)
           .then(_ => res.status(204).send())
           .catch(err => res.status(500).send(err))
       }
    }

    //index
    const get = (req, res) => {
        app.db('clinicas-hospitais')
        .select('cnpj', 'razao_social', 'email')
        .then(clinicasHospitais => res.json(clinicasHospitais))//add o map pra alterar as colunas dos dados
        .catch(err => res.status(500).send(err))
    }

        //index com id
        const getById = (req, res) => {
            app.db('clinicas-hospitais')
            .select('cnpj', 'razao_social', 'email')
            .where({ id: req.params.id })
            .first()
            .then(clinicaHospital => res.json(clinicaHospital))//add o map pra alterar as colunas dos dados
            .catch(err => res.status(500).send(err))
        }

    return { save, get, getById }
}