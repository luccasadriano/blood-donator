import React, { Component} from 'react';
//import {Link} from 'react-router-dom';
//import logo from './logo.png';
import './Menu.css';

// const links = [
//     { route: "/", label: "Home"},
//     { route: "/login_cadastro", label: "Login/Cadastro"},
//     { route: "/orientacoes", label: "Orientações"},
//     { route: "/quem_somos", label: "Quem Somos"},
//     { route: "/apoiadores", label: "Apoiadores"},
// ];

class Menu extends Component {

    // renderLink = () => {
    //         return links.map( link =>
    //             <Link key={link.route} className="menu__link" to={link.route}>
    //                 {link.label}
    //             </Link>
    //         )
    // };
    
    render() {
        return(
        <nav className="menu">
            <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
            }} className="menu__logo">Blood Donator</h1>
                
            {/* <div className="menu__right">
                <ul className="menu__list">
                <li className="menu__list-item">
                { this.renderLink() }
                </li>
                </ul>
                 */}

<div class="menu__right">
                <ul class="menu__list">
		{/* <li class="menu__list-item"><a class="menu__link menu__link--active" href="/">Início</a></li>	 */}
                    <li class="menu__list-item"><a class="menu__link " href="/">Início</a></li>
                    {/* <li class="menu__list-item"><a class="menu__link" href="/login_d">Login/Cadastro</a></li> */}
                    <li class="menu__list-item"><a class="menu__link" href="/orientacoes">Orientações</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="/quem_somos">Quem Somos</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="/apoiadores">Apoiadores</a></li>
                    <li class="menu__list-item"><a class="menu__link" href="/logout">Logout</a></li>
                </ul>

            </div>
        </nav>

        );
    }};

export default Menu;