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
    min-height:66px;
    padding:0 24px 0 36px;
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
        color:#0086b3;
    }
    .subLinks{
        display:flex;
        flex-direction: flex-row;
        justify-content:start;
        margin:1% 1% 1% 0;
        h6{
            font-size:14px;
            margin-left:5px !important;
        }
    }
    .leftIcons{
        svg{
            font-size: 26px;
        }
    }
`;
export const BtsLogin = styled.div`
    display:flex;
    flex-direction: row;
    align-items:flex-end;
    margin-left: 1%;
    a{
        margin:6px 4px 0 0;
    }
    a:hover{
        color: white;
        border: 1px solid white;
        background-color: #0086b3;
    }
`;
export const BtnUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 10%;
    strong{
        font-size: 16px;
        color: white;
        margin-right: 2%;
    }
    ::after{
        color: white !important;
    }
`;