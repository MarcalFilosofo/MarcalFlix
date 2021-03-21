import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import 'bootstrap/dist/css/bootstrap.min.css';

import './Admin.css'

export default class Login extends Component{
    renderAdminPages(){
        return(
            <div className="admin-pages">
                <Tabs defaultActiveKey="save" variant="pills" id="uncontrolled-tab-example">

                    <Tab tabClassName="tab" eventKey="save" title="Publicar">
                        <h2>publicar</h2>
                    </Tab>
                    <Tab eventKey="delete" title="Apagar">
                        <h2>Apagar</h2>
                    </Tab>
                    <Tab eventKey="edit" title="Editar">
                        <h3>Editar</h3>
                    </Tab>
                </Tabs>
            </div>
        )
    }

    render(){
        return(
            <div className="background">
                {/* <Header slide={false}></Header> */}
                { this.renderAdminPages() }
            </div>
        )
    }
}