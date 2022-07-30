import React,{ useRef, useEffect } from 'react';
import {Container, Icone} from './styles';
import {BiNews} from 'react-icons/bi';

const Loading = (props) => {
  
  const ref = useRef()
  useEffect(() => {
    if(props.isPage){
      ref.current.style.minHeight = "80vh";
    }
  })
  return (
       <Container ref={ref}>
            {props.isPage && 
              <Icone to="/" >
                  <BiNews/>
                  <h5>News</h5>
              </Icone>
            }
           <div style={{height:"25px",width:"25px",fontSize:"7px"}}
                class="spinner-border text-dark" role="status"/>
       </Container>
  )
}

export default Loading