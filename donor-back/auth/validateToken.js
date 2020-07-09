const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = app => {
        const validateToken = async (req, res) => {
            const doadorData = req.body || null
            try{
                if(doadorData){
                    if(new Date(token.exp * 1000) > new Date()){
                        return res.send(true)
                    }
                }
            }catch(e) {
                //problema com o token
            }

            res.send(false)
        }
    return { validateToken }
}