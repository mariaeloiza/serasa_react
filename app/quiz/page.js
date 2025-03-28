'use client'

import { use, useState } from "react";
import "./quiz.css"

function Quiz() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    function calculaTotal(){
        alteraTotal(p1+p2+p3+p4)
    }

    function verificaFilme(e) {
        if (e.target.value == "rei leão") {
            alteraP4(1);
        } else {
            alteraP4(0);
        }
    }

    return ( 
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>

            <hr/>

            <h2>Qual a cor do cavalo branco de Napoleãum?</h2>
            <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Preto </label>
            <br/>
            <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Azul </label>
            <br/>
            <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Branco </label>
            <br/>
            <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1) } /> Transparente </label>
            <br/>

            <hr/>

            <h2>Qual a melhor letra?</h2>
            <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) }  /> A </label>
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> B </label>
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> C </label>
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alteraP2(1) } /> X </label>
            <br/>

            <hr/>

            <h2>Quanto é dois + 2?</h2>
            <ul>
                <li className={selecionado[0]} onClick={ ()=> { alteraP3(1); alteraSelecionado(["selecionado","","",""]) } } >2</li>
                <li className={selecionado[1]} onClick={ ()=> {alteraP3(0); alteraSelecionado(["","selecionado","",""]) } }>0</li>
                <li className={selecionado[2]} onClick={ ()=> {alteraP3(0); alteraSelecionado(["","","selecionado",""]) } }>aaaaaa</li>
                <li className={selecionado[3]} onClick={ ()=> {alteraP3(0); alteraSelecionado(["","","","selecionado"]) } }>sim</li>
            </ul>

            <hr/>

            <h2>Qual o melhor filme da Disney?</h2>
            <input onChange={ (e)=> verificaFilme(e) } />
            <br/>


            <button onClick={ ()=> calculaTotal() }> Enviar respostas </button>

            <p> Total de pontos: {total} </p>

        </div>
    );
}

export default Quiz;