import React from 'react';
import { Route, Redirect } from 'react-router'

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('usertoken')
    return isLogged ? <Route { ...props }/> : <Redirect to='/login_d'/>


}

export default PrivateRoute;