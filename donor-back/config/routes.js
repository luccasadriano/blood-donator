module.exports = app => {

    app.post('/signupd', app.api.doador.save)
    app.post('/signuph', app.api.clinicaHospital.save)
    app.post('/signind', app.auth.authd.signin)
    app.post('/signinh', app.auth.authh.signin)
    app.post('/validateToken', app.auth.authd.validateToken)

    app.route('/doadores')
    .all(app.config.passport.authenticate())//não esquecer de colocar o authorization e bearer no insomnia
    .post(app.api.doador.save)
    .get(app.api.doador.get)

    app.route('/doadores/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.doador.save)
    .get(app.api.doador.getById)
//Cuidado com as ordem! 
    app.route('/clinicasHospitais')
    .all(app.config.passport.authenticate())
    // .post(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.get)

    app.route('/clinicasHospitais/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.clinicaHospital.save)
    .get(app.api.clinicaHospital.getById)

    app.route('/agendamentos')
    .all(app.config.passport.authenticate())
    .post(app.api.agendamento.save)
    .get(app.api.agendamento.get)

    app.route('/agendamentos/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.agendamento.save)
    .get(app.api.agendamento.getById)
    .delete(app.api.agendamento.remove)

    app.route('/enderecos')
    .all(app.config.passport.authenticate())
    .post(app.api.endereco.save)
    .get(app.api.endereco.get)

    app.route('/enderecos/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.endereco.save)
    .get(app.api.endereco.getById)

    app.route('/bairros')
    .all(app.config.passport.authenticate())
    .post(app.api.bairro.save)
    .get(app.api.bairro.get)

    app.route('/bairros/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.bairro.save)
    .get(app.api.bairro.getById)

    app.route('/cidades')
    .all(app.config.passport.authenticate())
    .post(app.api.cidade.save)
    .get(app.api.cidade.get)

    app.route('/cidades/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.cidade.save)
    .get(app.api.cidade.getById)

    app.route('/estados')
    .all(app.config.passport.authenticate())
    .post(app.api.estado.save)
    .get(app.api.estado.get)

    app.route('/estados:id')
    .all(app.config.passport.authenticate())
    .put(app.api.estado.save)
    .get(app.api.estado.getById)

    app.route('/telefones')
    .all(app.config.passport.authenticate())
    .post(app.api.telefone.save)
    .get(app.api.telefone.get)

    app.route('/telefones:id')
    .all(app.config.passport.authenticate())
    .put(app.api.telefone.save)
    .get(app.api.telefone.getById)

    // app.route('')
    // .post(app.api..save)
    // .get(app.api..get)

    // app.route('/:id')
    // .put(app.api..save)
    // .get(app.api..getById)

}