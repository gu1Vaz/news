import styled from 'styled-components';
export const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    input,button{
        height: 31px;
    }
    input{
        border-bottom-left-radius: 4px !important;
        border-top-left-radius:4px !important;
    }
    button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom-right-radius: 4px !important;
        border-top-right-radius:4px !important;
        svg{
            font-size:12px;
        }
    }
`