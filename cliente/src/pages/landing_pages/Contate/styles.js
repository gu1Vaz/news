import styled from "styled-components";

export const Background= styled.div`
    min-height: 90vh;
    width: 100%;
    position: relative;
`

export const Feed= styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333333;
    width: fit-content;
    max-width: 20%;
    word-break: break-all;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px;
    }
`
export const CenteredDiv = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  width: 50vh;
  min-height: 40vh;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(36, 41, 46, 0.8);
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  a{
        display:flex;
        flex-direction: row;
        color:white;
        
        svg{
            font-size:20px;
        }
        h6{
            color:white;
        }
    }
  .textarea[contenteditable]:empty::before {
        content: "Envie seu feedback...";
        font-size: 16px;
        color: white;
    }
    .textarea {
        padding-top: 1%;
        border-bottom: 1px solid white;
        font-family: inherit;
        font-size: 17px;
        max-width: 45vh;
        min-width: 35vh;
        color: white;
    }
  .textarea[contenteditable]:after {
        display: flex;
        content: '';
        border-bottom: solid 2px white;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
  .textarea[contenteditable]:focus:after { transform: scaleX(1); }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;
  }
`;
export const Btns = styled.div`
  display: flex;
  flex-direction: row;
`