import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Rodape from '../../../components/Rodape'
import { Wrapper, Content } from './styles';
import { useNavigate } from 'react-router-dom';
export default function AuthLayout({ children }) {
    const navigate = useNavigate();
    return (
        <>
        <Header navigate={navigate}/>
        
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
        <Rodape />
        
        </>
       
    );
}
AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};