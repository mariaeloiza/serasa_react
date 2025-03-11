'use client'

import { useState } from "react";
import "./painel.css"

function Painel() {

    const [ usuario, alteraUsuario ] = useState("")
    const [ senha, alteraSenha ] = useState("")

    const [ mostraErro, alteraMostraErro ] = useState(false)
    const [ mostraAcerto, alteraMostraAcerto ] = useState(false)

    function login(){
        if(usuario == "maria" && senha == "1234" ){
            alteraMostraAcerto(true)
            alteraMostraErro(false)
        }else if (usuario != "maria" || senha != "1234" ){
            alteraMostraErro(true)
            alteraMostraAcerto(false)
        }
    }

    return ( 
        <div>

            <h1>Painel administrativo</h1>

            <label>
                Digite o usuário:
                <input onChange={ (e)=> alteraUsuario(e.target.value) } />
            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={ (e)=> alteraSenha(e.target.value) } />
            </label>

            <br/>

            <button onClick={ ()=> login() } >Entrar</button>

            {/* Operador TERNÁRIO */}

            {
                mostraErro == true ?  
                    <div className="erro">
                        <p>Usuário ou senha incorretos!</p>
                    </div>
                :
                    <div></div>

            }

            {
                mostraAcerto == true ?
                    <div className="certo">
                        <p>Logado com sucesso!</p>
                    </div>
                :
                    <div></div>
            }


        </div>
    );
}

export default Painel;