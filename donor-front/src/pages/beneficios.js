import React, {Component} from 'react';
import './css/beneficios.css';
import cinema from '../img/gift-cinema.png';
import mouse from '../img/gift-mouse.png';
import netflix from '../img/gift-netflix.png';
import spotify from '../img/gift-spotify.png';


export class beneficios extends Component {
    render() {
        return (
            <center>
                <div className="beneficios">
                    <h1 id="beneficios"> Benefícios </h1>
                <ul className="beneficios-itens">
                        <li className="gift_list" id='gift'><img className='gift' src={cinema} alt="Desconto no Cinema"/>
                            <h1>Desconto no Cinema</h1>
                            <p>Pague meia entrada com convidados em qualquer Cinemax do Brasil.</p>
                        </li>
                        <li className="gift_list"><img className='gift' src={mouse} alt="Mouse Gamer"/>
                            <h1>Mouse Gamer</h1>
                            <p> Tenha um belo Mouse Gamer MG386 optico com 3200DPI e base de metal.</p>
                        </li>
                        <li className="gift_list"><img className='gift' src={netflix} alt="1 Mês de Netflix"/>
                            <h1>1 Mês de Netflix</h1>
                            <p> Assista durante 1 mês de Netflix com as melhores Séries e Filmes.</p>
                        </li>
                        <li className="gift_list"><img className='gift' src={spotify} alt="1 Mês de Spotify"/>
                            <h1>1 Mês de Spotify Premium</h1>
                            <p> Escute musicas com qualidade sensacional e baixe músicas 
                            <br></br>para escutar onde quiser com o Spotify Premium durante 1 mês.</p>
                        </li>
                        </ul>
            </div>
            </center>
        )
   }
};

export default beneficios;