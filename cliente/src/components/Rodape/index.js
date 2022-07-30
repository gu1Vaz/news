import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container} from './styles';
import icon from '../../svgs/icon_dark.png'

export default class Rodape extends Component{
    render(){

        return (
            <Container className="navbar navbar-expand-lg navbar-light "  >
                    <img className="icon me-4" src={icon} alt=""></img>
                    <span>© 2020  Hackin.inc</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#footbarSupportedContent" aria-controls="footbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>
                    <div id="footbarSupportedContent" className="collapse navbar-collapse ">
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6>Termos</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6>Privacidade</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6>Segurança</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6>Status</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6>Ajuda</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6 >FeedBack</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6 >Contate Hackin</h6></Link>
                        <Link  className="nav-item" to="/" 
                               data-bs-target=".navbar-collapse.show" ><h6 >Sobre</h6></Link>
                    </div>
            </Container>
        );
    }
}
