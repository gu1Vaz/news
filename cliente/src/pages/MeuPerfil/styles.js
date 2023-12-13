import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:3% 2% 2% 1.5%;
    min-height:78vh;
    width: 100%;
`
export const DivPerfil = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1%;
    width: 50%;
    height: 100%;
    border: 1px solid #dee2e6;
`
export const NavPerfil = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 1% 2% 1%;
    width: 24%;
    height: 100%;
    border-right: 1px solid #dee2e6;
`
export const Options = styled.div`
    display: flex;
    flex-direction: column;
    button{
        color: rgb(36, 41, 46);
    }
    button:hover{
        color: rgb(36, 41, 46);
        background-color: #f1f2f3;
    }
    .nav-link.active{
        color: white;
        background-color: rgb(36, 41, 46);
    }
`
export const Conteudo = styled.div`
    display: flex;
    width: 77%;
    padding: 1%;
    flex-direction: column;
`