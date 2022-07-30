import React, { Component } from 'react';
import { Container,NavBar} from './styles';
import {BiNews, BiDonateHeart} from 'react-icons/bi';
import {AiFillHome}from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        localStorage.removeItem('type');
        localStorage.removeItem('id');
        window.location.href = '/login';
    }
   
    render(){
        return (
            <Container>
                <NavBar className="navbar navbar-expand-lg navbar-dark "  >
                    <Link to="/" >
                        <BiNews/>
                        <h6>News</h6>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse ms-5">
                        <Link  className="nav-item subLinks" to="/" data-bs-target=".navbar-collapse.show" >
                            <AiFillHome  />
                            <h6>Inicio</h6>
                        </Link>
                        <Link  className="nav-item  subLinks" to="/donate" data-bs-target=".navbar-collapse.show" >
                            <BiDonateHeart/>
                            <h6 >Doação</h6>
                        </Link>
                    </div>
                </NavBar>
            </Container>
        );
    }
}
