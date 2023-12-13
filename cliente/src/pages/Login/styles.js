import styled from 'styled-components';
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    width: 100%;
    a{
        display:flex;
        flex-direction: row;
        align-items:flex-end;
        color:black;
        svg{
            font-size:24px;
        }
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;
export const Form = styled.form`
    display: flex;      
    flex-direction: column;
    margin-top: 10px;
    min-width: 300px;
    width: 500px;
    input {
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        margin: 5px 0;
    }
    button {
        margin: 5px 0 0;
        padding: 6px 16px;
        background: #666666;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 100px;
        font-size: 16px;
    }
`;
export const Footer = styled.aside`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    background-color: #f5f8fa;
    color: #333;
    text-align: left;
    padding: 20px;
    font-size: 16px;
    min-width: 300px;
    width: 500px;
    a {
        margin-left: 5px;
        color: #a64dff;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`;