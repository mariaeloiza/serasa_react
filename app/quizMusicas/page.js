'use client'

import { use, useState } from "react";
import "./quizMusicas.css"

function QuizMusicas() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState(0)
    const [ p5, alteraP5 ] = useState(0)
    const [ p6, alteraP6 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)
    
    const [ mostraInicio, alteraMostraInicio ] = useState(true)
    const [ mostraErro, alteraMostraErro ] = useState(false)
    const [ mostraAcerto, alteraMostraAcerto ] = useState(false)

    const [ mostraP1, alteraMostraP1 ] = useState(false)
    const [ mostraP2, alteraMostraP2 ] = useState(false)
    const [ mostraP3, alteraMostraP3 ] = useState(false)
    const [ mostraP4, alteraMostraP4 ] = useState(false)
    const [ mostraP5, alteraMostraP5 ] = useState(false)
    const [ mostraP6, alteraMostraP6 ] = useState(false)
    
    function calculaTotal(){
        let totalAtualizado = 0 
    
        alteraTotal(p1+p2)
    
        totalAtualizado = p1+p2
        alteraTotal(totalAtualizado)
    
        let valorBanco = parseInt(localStorage.getItem("total"))
        localStorage.setItem( "total", totalAtualizado )
    
    }

    return (
        <div>
            
            {
                mostraInicio == true &&
                <div className="inicio">
                    <h1>Adivinhe as músicas dos filmes da Disney</h1>
                    <button onClick={() => {alteraMostraP1(true); alteraMostraInicio(false)} } >Iniciar</button>
                </div>
            }

            {
                mostraP1 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <audio>
                            <source src=""></source>
                        </audio>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } />  </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } />  </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)} } /> </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } />  </label>
                        <br/>
                    </div>
            }

            {
                mostraP2 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(1); alteraMostraP3(true); alteraMostraP2(false)} }  />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } />  </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP3 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} }  />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(1); alteraMostraP4(true); alteraMostraP3(false)} } />  </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP4 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} }  />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(1); alteraMostraP5(true); alteraMostraP4(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} } />  </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP5 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} }  />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(1); alteraMostraP6(true); alteraMostraP5(false)} } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} } />  </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP6 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) }  />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0) } />  </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP2(1) } />  </label>
                        <br/> 

                        <button onClick={ ()=> calculaTotal() }> Finalizar </button>
                        <p> Total de pontos: {total} </p>
                    </div>
            }

            {
                mostraErro == true &&
                    <div className="erro">
                        <p>Você acertou!!! 😁</p>
                    </div>
            }

            {
                mostraAcerto == true &&
                    <div className="acerto">
                        <p>Você errou!!! 😥</p>
                    </div>
            }



        </div>


  );
}

export default QuizMusicas;
