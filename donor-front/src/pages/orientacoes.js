import React, {Component} from 'react';
import certo from"../components/img/certo.png";
import "./css/orientacoes.css";
import errado from"../components/img/errado.png";

export class orientacoes extends Component {
    render() {
        return (
            <center>
        <div className='PaginaOrientacoes'>
         <div className="OrientacoesTexto">
                <h1>ORIENTAÇÕES PARA DOAR SANGUE</h1>
                <p>Antes de doar, certifique-se de que você atende às condições especificadas a seguir:</p>
            </div>
                <div className="orientacoes">
                <ul  className="orientacoesRequisitos">
                    <li>
                        <h3>REQUISITOS BÁSICOS</h3>
                    </li>
                    <li className="orientacao1"><img src={certo} alt="Certo"/>
                        <p>Estar em boas</p>
                        <p> condições de </p>
                        <p>saúde</p>
                    </li>
                    <li className="orientacao2"><img src={certo} alt="Certo"/>
                        <p>Ter entre 16 e</p>
                        <p>69 anos</p>
                            
                    </li>
                    <li className="orientacao3"><img src={certo} alt="Certo"/>
                        <p>Pesar no</p>
                        <p>mínimo 50kg</p>
                    </li>
                    <li  className="orientacao4"><img src={certo} alt="Certo"/>
                        <p>Estar descansado,</p>
                        <p>ter dormido pelo menos 6 horas</p>
                        <p>nas últimas 24 horas</p>
                    </li>
                    <li  className="orientacao5"><img src={certo} alt="Certo"/>
                        <p>Estar alimentado,</p>
                        <p>evitar alimentação gordurosa nas 4 horas</p>
                        <p>que antecedem a doação.</p>
                    </li>
                    <li  className="orientacao6"><img src={certo} alt="Certo"/>
                        <p>Estar com frequência cardíaca /</p>
                        <p>pulso regulares,</p>
                        <p> entre 50 e e 100 batimentos /</p>
                        <p> pulsação por minuto</p>
                    </li>
                </ul>
                </div>

                <div className="orientacaoImpedimentos">
                <ul>
                    <li className="orientacaoImpedimento">
                        <h3>IMPEDIMENTOS PARA A DOAÇÃO</h3>
                    </li>
                    <li className="errado1"><img src={errado} alt="errado"/>
                        <p>Febre, diarreia,</p>
                        <p>gripe ou resfriado</p>
                    </li>
                    <li className="errado2"><img src={errado} alt="errado"/>
                        <p>Ingestão de bebida alcóolica 12 horas antes da doação</p>
                    </li>
                    <li className="errado3"><img src={errado} alt="errado"/>
                        <p>Gravidez e Amamentação, se o parto ocorreu há menos de 12 meses</p>
                    </li>
                    <li className="errado4"><img src={errado} alt="errado"/>
                        <p>Tatuagem/maquiagem</p>
                        <p>definitiva nos últimos 12 meses</p>
                    </li>
                    <li className="errado5"><img src={errado} alt="errado"/>
                        <p>Riscos de doenças</p>
                        <p>sexualmente transmissíveis</p>
                    </li>
                    <li className="errado6"><img src={errado} alt="errado"/>
                        <p>Malária, Hepatite,</p>
                        <p> AIDS, Doença de Chagas</p>
                    </li>
                </ul>
                </div>
            </div>
            </center>
        )
   }
};

export default orientacoes;