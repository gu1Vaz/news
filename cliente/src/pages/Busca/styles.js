import styled from 'styled-components';
export const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    min-height: 100vh;
`;
export const Head = styled.div`
    display:flex;
    flex-direction: column;
    min-height: 164px;
    width:100%;
    height: 20%;
    align-items: center;
    justify-content: center;
    h3{
        margin-bottom: 1% !important;
        color: #737373;
        
        sNb1{
                color: #09D3A6;
            }
        sNb2{
            color: #33ccff;
        }
    }
    
`;
export const Results = styled.ul`
    display: flex;
    align-items: center;
    width:75%;
    margin-bottom: 1%;    
`;
export const Result = styled.li`
    cursor: pointer;
    border: none;
    border-bottom:1px solid #F2F3F2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:100%;
    padding:2px;
   text-decoration:none;
`;
export const ResultColumn = styled.h6`
    word-break: break-all;
    margin:0 1% 0 1% !important;
    color: #737373;
`;

export const ResultsBar = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    .result-title{
        padding-bottom: 0.8% !important;
        margin-bottom:  0.8% !important;
        border-bottom:1px solid #F2F3F2;
    }
    .filtro{
        cursor: pointer;
    }
`;