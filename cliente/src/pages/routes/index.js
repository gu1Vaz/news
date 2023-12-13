import React from 'react';
import { Route, Routes } from "react-router-dom";
import Wrapper from './Route';

import LoginAdmin from '../LoginAdmin';
import Admin from '../Admin';
import Principal from '../Principal';
import Materia from '../Materia';
import Login from '../Login';
import Register from '../Register';
import Busca from '../Busca';
import MeuPerfil from '../MeuPerfil';

import Feedback from '../landing_pages/Feedback';
import Termos from '../landing_pages/Termos';
import Privacidade from '../landing_pages/Privacidade';
import Seguranca from '../landing_pages/Seguranca';
import Status from '../landing_pages/Status';
import Ajuda from '../landing_pages/Ajuda';
import Contate from '../landing_pages/Contate';
import Sobre from '../landing_pages/Sobre';


export default function Rotas() {
    return (
        <Routes>
            <Route path="/meuPerfil" isAuth exact element={<Wrapper component={MeuPerfil}/>}/>

            <Route path="/login" isAuth exact element={<Wrapper component={Login}/>}/>
            <Route path="/register" isAuth exact element={<Wrapper component={Register}/>}/>

            <Route path="/loginAdmin" isAuth element={<Wrapper component={LoginAdmin}/>} /> 
            <Route path="/admin" isAdmin  element={<Wrapper component={Admin}/>} />  

            <Route path="/"  exact element={<Wrapper component={Principal}/>}/>
            <Route path="/verMateria/:id"  element={<Wrapper component={Materia}/>} /> 
            <Route path="/busca/:id"  element={<Wrapper component={Busca}/>} />  

            {/* landing pages */}
            <Route path="/feedback"  exact element={<Wrapper component={Feedback}/>}/>  
            <Route path="/termos" exact element={<Wrapper component={Termos} />} />
            <Route path="/privacidade" exact element={<Wrapper component={Privacidade} />} />
            <Route path="/seguranca" exact element={<Wrapper component={Seguranca} />} />
            <Route path="/status" exact element={<Wrapper component={Status} />} />
            <Route path="/ajuda" exact element={<Wrapper component={Ajuda} />} />
            <Route path="/contate" exact element={<Wrapper component={Contate} />} />
            <Route path="/sobre" exact element={<Wrapper component={Sobre} />} />
        </Routes>
    );
}