import React from 'react';
import styled from 'styled-components';
import skull from "../../../svgs/skull2.gif"
import { Link } from 'react-router-dom';

const StyledStatus = styled.div`
  
`;

const Status = () => {
  return (
    <StyledStatus className='Content'>
        <Link to="/" >
            <img width={50} height={50} src={skull} alt="logo" />
            
            <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
        </Link>
        <h2>Status</h2>
        <h6>Servidores Online</h6>
    </StyledStatus>
  );
};

export default Status;
