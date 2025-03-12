'use client'

import { use, useState } from "react";
import "./quiz.css"

function Quiz2() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    const [ mostraP1, alteraMostraP1 ] = useState(false)
    const [ mostraP2, alteraMostraP2 ] = useState(false)

    function calculaTotal(){
        alteraTotal(p1+p2)
    }

    return ( 
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>

            <hr/>

            {
                mostraP1 == true &&
                    <div>
                        <h2>Qual a cor do cavalo branco de Napoleãum?</h2>
                        <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Preto </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Azul </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Branco </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1) } /> Transparente </label>
                        <br/>
                    </div>
            }

            <hr/>

            {
                mostraP2 == true &&
                    <div>
                        <h2>Qual a melhor letra?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) }  /> A </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> B </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> C </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(1) } /> X </label>
                        <br/> 
                    </div>
            }

            <hr/>

            <button onClick={ ()=> calculaTotal() }> Enviar respostas </button>

            <p> Total de pontos: {total} </p>

        </div>
    );
}

export default Quiz2;