import styled from 'styled-components';
export const Container = styled.div`
    display:flex;
    position:static !important;
    flex-direction: row;
    background: #fff;
    align-items:center;
    width:100%;
    border-top: 1px solid #ced4da;
    padding:2% 8% 2% 8% !important;
    a{
        font-size:12px;
    }
    span{
        font-size:14px;
    }
    #footbarSupportedContent{
        max-width:80%;
        a{
            margin-left:8%;
            h6{
                color:#0d6efd;
                font-size:14px;
            }
        }
        a:first-child{
            margin-left:3%;
        }
    }
`;