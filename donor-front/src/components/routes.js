import React, {Component} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import home from '../pages/home';
import apoiadores from '../pages/apoiadores';
import login_D from '../pages/login_D';
import login_H from '../pages/login_H';
import cadastro_D from '../pages/cadastro_D';
import cadastro_H from '../pages/cadastro_H';
import orientacoes from '../pages/orientacoes';
import quem_somos from '../pages/quem_somos';
import NoMatch from '../pages/NoMatch';
import Menu from '../components/Menu/Menu';
import agendamento from '../pages/agendamento';
import endereco from '../pages/endereco';
import beneficios from '../pages/beneficios';
import meus_dados_D from '../pages/meus_dados_D';
import meus_dados_H from '../pages/meus_dados_H';
import logo from '../components/Menu/logo.png';
import  '../components/Menu/Menu.css'
import history from './auth/history'
import PrivateRoute from './auth/PrivateRoute';
import logout from '../pages/logout';



const links = [
    { route: "/", label: "Home"},
    { route: "/login_cadastro", label: "Login/Cadastro"},
    { route: "/orientacoes", label: "Orientações"},
    { route: "/quem_somos", label: "Quem Somos"},
    { route: "/apoiadores", label: "Apoiadores"},
    { route: "/logout", label: "logout"}
];

export class Routes extends Component {
    render() {
        return (
            <main className ="container">
                <Menu links = {links}  logo={logo}/>
            <Router history = {history}>
        <Switch>
            <PrivateRoute exact  path="/" component= {home} />
            <Route  path="/apoiadores" component= {apoiadores} />
            <Route  path="/login_d" component= {login_D} />
            <Route  path="/login_h" component= {login_H} />
            <Route  path="/cadastro_d" component= {cadastro_D} />
            <Route  path="/cadastro_h" component= {cadastro_H} />
            <Route  path="/orientacoes" component= {orientacoes} />
            <Route  path="/quem_somos" component= {quem_somos} />
            <Route  path="/logout" component= {logout} />
            <PrivateRoute  path="/agendamento" component= {agendamento} />
            <PrivateRoute  path="/endereco" component= {endereco} />
            <PrivateRoute  path="/beneficios" component= {beneficios} />
            <PrivateRoute  path="/meus_dados_d" component= {meus_dados_D} />
            <PrivateRoute  path="/meus_dados_h" component= {meus_dados_H} />
            <Route component={NoMatch}/>


        </Switch>
            </Router> 
        </main>
                      
        )
    }
};

export default Routes;