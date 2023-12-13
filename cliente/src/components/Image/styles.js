import styled from 'styled-components';
export const Container = styled.div`
    img{
        margin-right:1%;
        cursor:pointer;
    }
`;
export const Img = styled.div`
    img{
        margin-right:1%;
        cursor:pointer;
    }
`;
export const Modal = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
    justify-content:center;
    align-items:center;
`;

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
    justify-content:center;
    align-items:center;
    background: black;
    opacity: 0.5;
    z-index: 1;
    margin:0 !important;
`;
export const Conteudo = styled.div`
    display: flex;
    opacity:1;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items:center;
    justify-content:center;
    img{
        max-width:90%;
        max-height:90%;
    }
`;
export const BotaoFechar = styled.div`
    display: flex;
    flex-direction: row;
    height:64%;
    justify-content:center;
    align-items:start;
    svg{
        cursor:pointer;
        font-size:22px;
        path{
            stroke: white !important;
        }
    }
`;
