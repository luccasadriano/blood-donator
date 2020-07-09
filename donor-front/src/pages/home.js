import React, {Component} from 'react';
import './css/home.css';
import { Link } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <center>
            <div id='home'>
                <div className = 'botoes'>
                    <Link to='/agendamento' className='links'>
                        <button > Salve uma Vida </button></Link>
                    <Link to='/beneficios' className='links'>
                        <button > Meus Benefícios </button></Link>
                </div>
            </div>
            </center>
        )
   }
};

export default Home;