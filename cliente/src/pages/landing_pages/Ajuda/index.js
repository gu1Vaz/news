import React from 'react';
import styled from 'styled-components';
import '../global_landing.css'
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledAjuda = styled.div`

`;

const Ajuda = () => {
  return (
    <StyledAjuda className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Ajuda</h2>
        <h6>Estamos aqui para ajudar! Se você tiver alguma dúvida, preocupação ou precisar de assistência, contate guilima233@gmail.com</h6>
    </StyledAjuda>
  );
};

export default Ajuda;
