import React from 'react'
import ReactDOM from 'react-dom'
import Jogo from './components/Jogo'
import Estadio from './components/Estadio'


// ReactDOM.render(
//             <div>
//                 <Jogo/>
//                 <Estadio/>
//              </div> ,
//             document.getElementById('root'))
import {BomDia, BoaTarde} from './components/Saudacoes'
import Saudacoes from './components/Saudacoes'
import Produto from './classes/Produto'
ReactDOM.render(
            <React.Fragment>
                <Jogo timeA="Sesi Franca" timeB="Flamengo"/>
                <Estadio nome="Pedrocao"/>
                <BomDia timeA="Sesi Franca"/>
                <BoaTarde timeB="Flamengo"/>
                <Saudacoes.BoaNoite timeB="Flamengo"/>
                <Produto/>
             </React.Fragment> ,
            document.getElementById('root'))