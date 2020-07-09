import React from 'react'
import { token } from '../service/apiBack'
import store from '../components/auth/store'
import { Route, Redirect } from 'react-router'


const logout = () => {

    localStorage.removeItem(token)
     store('user', false)

        return (
            <>
        <Route/>: <Redirect to='/login_d'/>
        </>
        )
}
export default logout








// history = useHistory()

// const logout = () => {

//     localStorage.removeItem(token)
//     store('user', null)
//     // history.push('/login_d')


// }

// export default logout