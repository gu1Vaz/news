import styled from 'styled-components';
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background: #fff;
    width:100%;
`;
export const NavBar = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    width:100%;
    background:#24292E;
    min-height:62px;
    padding:0 36px 0 36px;
    a{
        display:flex;
        flex-direction: row;
        align-items:flex-end;
        color:white;
        svg{
            font-size:20px;
        }
        h6{
            color:white;
        }
    }
    a:hover{
        text-decoration:none;
        color:#e91e63;
    }
    .subLinks{
        display:flex;
        flex-row;
        justify-content:start;
        margin:1% 1% 1% 0;
        h6{
            font-size:14px;
            margin-left:5px !important;
        }
    }
`;