import styled from 'styled-components';
export const DivFiltro = styled.div`
    .filtro{
        cursor: pointer;
    }
    background-color: #f1f2f3;
    margin-top: 1%;
    padding: 1%;
    min-height: 130px;
    .form{
       display: flex;
       flex-direction: row;
       align-items: center;
       flex-wrap: wrap;
       height: 100%;
       justify-content: start;
    }
    .form-group{
        margin: 0 1% 0 0;
        flex-grow: 1;
    }
`;