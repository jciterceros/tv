import React from 'react';
import './contato.css'

function Contato(props) {
    return (
        <div className="formulario">
            <form action="" className="Conteudo">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" />
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label for="msg">Mensagem:</label>
                    <textarea id="msg" rows="5" cols="25"></textarea>
                </div>
                <div class="button">
                    <button type="submit">Enviar sua mensagem</button>
                </div>
            </form>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
       );
};
export default Contato;