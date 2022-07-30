import styled from 'styled-components';
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    padding:1% 2% 2% 4%;
    ${({ max }) => max < 800 ?`width:100%;`:`width:71%;`}
    max-height:90vh;
    min-height:90vh;
    border-right:1px solid #24292E;
    margin: 1% 3px 3px 3px;
    overflow:auto;
`;
export const News = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    width:90%;
    height:100px;
    margin-top:1%;
    div{
        img{
            object-fit:cover;
        }
    }
    a{
        display: flex;
        flex-direction: row;
        align-items:center;
        margin-top:1%;
    }
    a:hover{
        text-decoration:none;
        h5,h6{
            color:#555;
        }
    }
`;
export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    align-items:start;
    margin-left:10px;
    h5{
        font-weight:bold;
    }
`;

export const BoasVindas = styled.div`
    display: flex;
    flex-direction: column;
    width:29%;
    align-items:center;
    padding:4%;
    padding-top:2%;
    padding-left:1%;
    h5{
        width:100%;
    }
    h6{
        display:flex;
        flex-wrap: wrap;
        max-width:100%;
    }
    .topico{
        width:100%;
        font-weight:bold;
        margin-bottom:1%;
    }
    .topico2{
        width:100%;
        margin-bottom:1%;
    }
`;