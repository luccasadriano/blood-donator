import React, {Component} from 'react';

export class NoMatch extends Component {
    render() {
        return (
            <center>
            <div>
                <h3>Ops... Página não encontrada!</h3>
                <p> Provalmente a página que você está tentando acessar não existe.</p>
            </div>
            </center>
        )
   }
};

export default NoMatch;