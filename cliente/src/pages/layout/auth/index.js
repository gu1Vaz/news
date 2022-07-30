import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Rodape from '../../../components/Rodape'
import { Wrapper, Content } from './styles';
export default function AuthLayout({ children }) {
    return (
        <>
        <Header />
        
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