module.exports = app => {

    //verifica se existe
    function existsOrError(value, msg){
        if(!value) throw msg//lançando a msg de erro
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }

    //verificar se não existe
    function notExistsOrError(value, msg){
        try {
            existsOrError(value, msg)
        } catch(msg){
            return
        }
        throw msg
    }

    //verifica se os dados é igual
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }//acessando a partir de app.api.existsOrError ou notExistsOrError ou equalsOrError
}