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
export const VetFiles  = styled.div`
    display: flex;
    margin-top: 2%;
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

export const CommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top:1%;
`;
export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    max-height: 60vh;
    overflow: auto;
    margin-top:0.5%;
    overflow-x: hidden;
    h6{
        margin: 2% 0 0 0.7% !important;

    }
`;
export const Comment = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    margin:2% 0 0 0;
    svg{
        margin-left: 1%;
    }
    div{
        margin-left: 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            display: flex;
            margin: 0;
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            flex-direction: row;
            .timeAgo{
                margin-left: 10px;
            }
            .nick-in-comment{
                font-weight: bold;
                font-size: medium;
            }
        }
        span{
            font-size: 15px;
            word-break: break-word;
        }
    }
`;

export const CommentBar = styled.div`
    padding-top: 1%;
    display: flex;
    flex-direction: column;
    .bar{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .textarea {
        padding-top: 1%;
        width: 96%;
        border-bottom: 1px solid #ccc;
        font-family: inherit;
        font-size: 17px;
        margin-left: 1%;
    }
    .textarea[contenteditable]:empty::before {
        content: "Adicione um comentário...";
        color: gray;
    }
    .textarea {
        padding-top: 1%;
        border-bottom: 1px solid #ccc;
        font-family: inherit;
        font-size: 17px;
    }
    .textarea[contenteditable]:empty::before {
        content: "Adicione um comentário...";
        color: gray;
    }
    
    .textarea[contenteditable]:after {
        display: flex;
        content: '';
        border-bottom: solid 2px black;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    .textarea[contenteditable]:focus:after { transform: scaleX(1); }
`
export const BtsCommentBar = styled.div`
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    margin-top: 0.6%;

    .btn-cancelar:hover{
        background-color:#e1e2e3;
    }
`