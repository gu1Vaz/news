import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledSobre = styled.div`
  
`;

const Sobre = () => {
  return (
    <StyledSobre className='Content'>
       <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Sobre</h2>
        <h6>Bem-vindo ao nosso website de notícias sobre hacking. Nosso objetivo é fornecer as últimas atualizações e insights sobre o mundo do hacking, segurança cibernética e tecnologia...</h6>
    </StyledSobre>
  );
};

export default Sobre;
