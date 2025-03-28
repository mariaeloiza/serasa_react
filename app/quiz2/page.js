'use client'

import { use, useState } from "react";
import "./quiz.css"

function Quiz2() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    const [ mostraP1, alteraMostraP1 ] = useState(true)
    const [ mostraP2, alteraMostraP2 ] = useState(false)

    function calculaTotal(){
        let totalAtualizado = 0 

        alteraTotal(p1+p2)

        totalAtualizado = p1+p2
        alteraTotal(totalAtualizado)

        let valorBanco = parseInt(localStorage.getItem("total"))
        localStorage.setItem( "total", totalAtualizado + valorBanco )
        
    }

    return ( 
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>

            <p>Total de pontos de todo mundo: {localStorage.getItem("total")} </p>

            <hr/>

            {
                mostraP1 == true &&
                    <div>
                        <h2>Qual a cor do cavalo branco de Napoleãum?</h2>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Preto </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Azul </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Branco </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)} } /> Transparente </label>
                        <br/>
                    </div>
            }

            <hr/>

            {
                mostraP2 == true &&
                    <div>
                        <h2>Qual a melhor letra?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} }  /> A </label>
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
