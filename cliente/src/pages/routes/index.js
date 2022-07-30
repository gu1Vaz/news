import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import LoginAdmin from '../LoginAdmin';
import Admin from '../Admin';
import Principal from '../Principal';
import Materia from '../Materia';
import Donate from '../Donate';

export default function Routes() {
    return (
        <Switch>
            <Route path="/loginAdminHoho" component={LoginAdmin} /> 
            
            <Route path="/adminHehe" isPrivate  component={Admin} />   

            <Route path="/" isPrivateAndPublic exact component={Principal}/>
            <Route path="/verMateria/:id" isPrivateAndPublic component={Materia} />
            <Route path="/donate" isPrivateAndPublic exact component={Donate}/>    
        </Switch>
    );
}