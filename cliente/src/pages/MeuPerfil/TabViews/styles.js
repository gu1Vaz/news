import styled from "styled-components";

export const DivTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    .input{
        margin-top: 3%;
        margin-bottom: 1%;
    }
    .uploud_ft{
        width: 30%;
        height: 30%;
        border-radius: 50% !important;
    }
    .id_conta{
        font-size: 20px;
    }
    a{
        display:flex;
        flex-direction: row;
        align-items:flex-end;
        color:black;
        svg{
            font-size:20px;
        }
        h6{
            color:black;
        }
    }
`

export const Tabs = styled.div`
    
`
export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    strong{
        margin-right: 1%;
    }
    strong, h6{
        font-size: 20px;
    } 
    
    span{
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
    h6{margin-left:1% !important}
`
export const Btns = styled.div`
    display: flex;
    flex-direction: column;
`