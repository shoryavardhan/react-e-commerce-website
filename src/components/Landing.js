import React, { Component } from 'react'
import {ButtonContainer} from './Button';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Title from './Title'

export default class landing extends Component {
    render() {
        return (
            <div className="container py-5">
            {/* title */}
            <Title name="Khanna" title="Packers"/>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src="../img/Component.png" className="img" alt="product"  height ="360px"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            
               
               
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  About Us:
                </p>
                <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                  <Link to="/">
                    <ButtonContainer cart>Our products</ButtonContainer>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        )
    }
}

