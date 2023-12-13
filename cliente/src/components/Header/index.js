import React, { Component } from 'react';
import { Container,NavBar, BtsLogin, BtnUser} from './styles';
import {BiNews} from 'react-icons/bi';
import {AiFillHome}from 'react-icons/ai';
import {RiAccountCircleFill}from 'react-icons/ri';
import { BiExit } from "react-icons/bi";
import {AiFillTool} from 'react-icons/ai'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import Image from '../Image';
import { Dropdown} from 'react-bootstrap';

export default class Header extends Component{
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        localStorage.removeItem('type');
        localStorage.removeItem('id');
        localStorage.removeItem('ademir');
        localStorage.removeItem('image_url');
        window.location.href = '/login';
    }
   
    render(){
        const id = localStorage.getItem('id');
        const user = localStorage.getItem('user');
        const currentUrl = window.location.pathname.includes("/busca/")
        const imagePerfil = localStorage.getItem("image_url");
    return (
    <Container>
        <NavBar className="navbar navbar-expand-lg navbar-dark justify-content-between"  >
            <Link to="/" >
                <BiNews/>
                <h6>News</h6>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse ms-5 justify-content-between align-items-center pt-1">
                <Link  className="nav-item subLinks" to="/" data-bs-target=".navbar-collapse.show" >
                    <AiFillHome  />
                    <h6>Inicio</h6>
                </Link>
                {localStorage.getItem("ademir") &&
                    <Link  className="nav-item subLinks" to="/admin" data-bs-target=".navbar-collapse.show" >
                        <MdOutlineAdminPanelSettings/>
                        <h6>Admin</h6>
                    </Link>
                }
                {!currentUrl && <SearchBar navigate={this.props.navigate} finalUrl={"/busca/"}/>}
                {id ?
                    <BtnUser>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle className='d-flex flex-row align-items-center justify-content-center' variant='dark'>
                                {imagePerfil? <Image disablePreview={true} link={imagePerfil} max={false} rounded={true} h={25} w={25}/> :<RiAccountCircleFill size={25} color={'white'}/>}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.ItemText>
                                Signed in as {user}
                            </Dropdown.ItemText>
                            <Dropdown.Divider/>
                            <Dropdown.Item className='d-flex flex-row align-items-center' onClick={()=>this.props.navigate("/meuPerfil")}>
                                <AiFillTool/> Configurações
                            </Dropdown.Item>
                            <Dropdown.Item className='d-flex flex-row align-items-center' onClick={this.logout}>
                                    <BiExit /> Sair
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </BtnUser>: 
                    <BtsLogin >
                        
                        <Link to="/register" className='btn btn-outline-light btn-sm'>Inscrever-se</Link>
                        <Link to="/login" className='btn btn-outline-light btn-sm'>Login</Link>
                    </BtsLogin>
                } 
                
            </div>
        </NavBar>
    </Container>
     );
    }
}
