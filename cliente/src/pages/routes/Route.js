import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import AuthLayout from '../layout/auth';
import DefaultLayout from '../layout/default';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    isAdmin,
    isAuth
}) {
    let { id } = useParams();
    const navigate = useNavigate();
    var type = localStorage.getItem('type')>0;
    const signed = localStorage.getItem('id') > 0;
    const ademir = localStorage.getItem('ademir') > 0;

    if (!signed && isPrivate) {
        return <Navigate to="login" />;
    }
    if(signed && isAuth){
        return (ademir)? <Navigate to="/admin" />:<Navigate to="/" />;
    }
    if(!ademir && isAdmin){
        return (signed) ?  <Navigate to="/"/>: <Navigate to="loginAdmin"/>;
    }
    
    const Layout = type ? DefaultLayout : AuthLayout;
    
    return (
        <Layout>
            <Component  id={id} navigate={navigate}/>
        </Layout>
    );
}
RouteWrapper.propTypes = {
    isAdmin: PropTypes.bool,
    isAuth: PropTypes.bool,
    isPrivate : PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
RouteWrapper.defaultProps = {
    isPrivate: false,
};