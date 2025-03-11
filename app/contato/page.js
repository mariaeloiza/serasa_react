'use client'

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {

    const [ nome, setName ] = useState("")
    const [ mensagem, setMessage ] = useState("")

    // Testando...
    function enviaMensagem(e) {

        e.preventDefault()

        if( nome == "" || mensagem == "" ){
            toast.error("Por favor, preencha todos os campos.");
        }else{
            toast.success("Mensagem enviada com sucesso!");
        }
    }

    return(
        <div>
            <h1> Página de Contato </h1>
            <p> Entre em contato conosco </p>

            <hr/>

            <form onSubmit={ (e)=> enviaMensagem(e) } >

                <label>
                    Digite seu nome: 
                    <input onChange={ (e)=> setName(e.target.value) } />
                </label>

                <br/>

                <label>
                    Digite sua mensagem: 
                    <input onChange={ (e)=> setMessage(e.target.value) } />
                </label>

                <br/>

                <button> Enviar </button>

            </form>
            <ToastContainer />

        </div>
    )
}