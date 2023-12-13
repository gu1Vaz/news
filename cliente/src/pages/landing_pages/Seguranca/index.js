import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledSeguranca = styled.div`
  
`;

const Seguranca = () => {
  return (
    <StyledSeguranca className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Segurança</h2>
        <h6>Damos prioridade à segurança do nosso website e usuários. Nossa equipe trabalha diligentemente para implementar medidas de segurança robustas...</h6>
    </StyledSeguranca>
  );
};

export default Seguranca;
