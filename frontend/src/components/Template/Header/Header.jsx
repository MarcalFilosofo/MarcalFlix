import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'
import Nav from "../Nav/Nav"

import './Header.css'

export default class Header extends Component{



    constructor(props){
        super(props);
    }

    renderSlide (props){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.redd.it/n1cu742mw3g31.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>aaa</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/eHf5qqR.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.showmetech.com.br/wp-content/uploads/2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    render(){
        if(this.props.slide){
            return(
                <header className="header">
                    <Nav />
                    {this.renderSlide()}
                </header>
            )
        }else{
            return(
                <header className="header">
                    <Nav />
                </header>
            )
        }
    }
    
}