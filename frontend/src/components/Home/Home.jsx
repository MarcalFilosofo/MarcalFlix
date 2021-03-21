import './Home.css'
import Footer from '../Template/Footer/Footer'
import Header from '../Template/Header/Header'
import Content from '../Content/Content'

import React from 'react'

export default props => 
    <div className="home">
        <Header bla="mudou" slide={true}></Header>
        <Content></Content>
        <Footer></Footer>
    </div>