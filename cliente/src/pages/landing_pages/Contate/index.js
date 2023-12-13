import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledContate = styled.div`
  
`;

const Contate = () => {
  return (
    <StyledContate className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Contate</h2>
        <h6>Para qualquer dúvida ou feedback, fique à vontade para entrar em contato conosco usando as informações de contato abaixo. Agradecemos seus comentários...</h6>
        <h6>guilima233@gmail.com</h6>
    </StyledContate>
  );
};

export default Contate;
