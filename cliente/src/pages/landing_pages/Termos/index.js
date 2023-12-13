import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledTermos = styled.div`
  
`;

const Termos = () => {
  return (
    <StyledTermos className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Termos</h2>
        <h6>Ao acessar e usar este website, você concorda em cumprir os termos e condições</h6>
    </StyledTermos>
  );
};

export default Termos;
