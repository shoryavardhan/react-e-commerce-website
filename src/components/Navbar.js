import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
         <NavWrapper className="navbar navbar-expand-sm    px-sm-5">
             {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/home'>
                    <img src={logo} alt="store" height="45px" className="filter"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5 ">
                        <Link to="/" className="nav-link text-bright">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                         <span className="mr-2">
                             <i className="fas fa-cart-plus"></i>
                        </span>
                    My cart
                    </ButtonContainer>
                </Link>
         </NavWrapper>
        )
    }
}

const NavWrapper =styled.nav`
background:var(--b);
.nav-link{
    color:var(--a);
    font-size:1.3rem;
    text-transform:capitalize 
}
`;