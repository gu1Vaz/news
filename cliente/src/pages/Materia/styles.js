import styled from 'styled-components';
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    padding:3% 2% 2% 1.5%;
    min-height:90vh;
    ${({ max }) => max < 800 ?`width:100%;`:`width:75%;`}
    p{
       font-size:1.25rem; 
    }
`;
export const Ads = styled.div`
    display: flex;
    flex-direction: column;
    padding:3% 2% 2% 1.5%;
    width:25%;
    max-height:40vh;
    margin:1%;
`; 
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;
export const DivImage = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    margin-top:2%;
    img{
        width:100%;
        height:300px;
        object-fit: contain; 
    }
`;
export const VetImages = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    h5{
        font-weight:bold;
    }
    div{
        display:flex;
        flex-direction:row;
        margin-top:1%;
        flex-wrap: wrap;
        img{
            object-fit: contain; 
        }
    }
`;
export const VetLinks = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    h5{
        font-weight:bold;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-top:1%;
        a{
            font-size:17px;
        }
    }
`;
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top:2%;
`;
export const Desenvolvimento = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;
export const Conclusao = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top:1%;
`;

