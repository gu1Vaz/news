import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledPrivacidade = styled.div`
  
`;

const Privacidade = () => {
  return (
    <StyledPrivacidade className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Privacidade</h2>
        <h6>Sua privacidade é importante para nós. Este website segue práticas rigorosas de privacidade para proteger suas informações pessoais...</h6>
    </StyledPrivacidade>
  );
};

export default Privacidade;
