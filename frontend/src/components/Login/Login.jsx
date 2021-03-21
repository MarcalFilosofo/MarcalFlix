import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Facebook from '../../assets/facebook.png';

import './Login.css'

export default class Login extends Component{
    render(){
        return(
          <>
            <div className="background">
              <h1 className="logo">MARCALFLIX</h1>
              <div className="login">
                <Link to='/home'>
                  <h1>
                    Entrar
                  </h1>
                </Link>
                <form action="#">
                  <input type="email" name="email" className="inputForm" placeholder="Email ou número de telefone"/>
                  <input type="password" name="password" className="inputForm" placeholder="Senha"/>
                  <button type="submit" className="submit">Entrar</button>
                </form>
                <a href="#" id="help">Presisa de ajuda?</a>
                
                <div className="facebook">
                  <img src={Facebook} alt="facebook" id="social"/>
                  Conectar ao Facebook
                </div>

                <div>
                  Novo por aqui?
                  <a href="#">Novo por aqui</a>
                </div>
                <span>
                  Página desenvolvida com fins meramente acadêmicos
                </span>

              </div>

              

            </div>

            <img id="wallpaper" className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/36527a57-3f46-4238-b9b0-8be9a6e369b5/BR-pt-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/36527a57-3f46-4238-b9b0-8be9a6e369b5/BR-pt-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/36527a57-3f46-4238-b9b0-8be9a6e369b5/BR-pt-20210315-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/36527a57-3f46-4238-b9b0-8be9a6e369b5/BR-pt-20210315-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>
          </>
        )
    }
}