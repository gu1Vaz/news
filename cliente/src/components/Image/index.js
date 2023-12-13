import React, { useEffect, useRef, useState, lazy } from 'react';
import {Container, Modal, Conteudo, Background, BotaoFechar} from './styles';
import Loading from "../../components/Loading";
import {GrClose} from 'react-icons/gr';


const ImagePreview = (props) => {
  const close = (e)=>{
      if(e.target.localName === "div") props.close.call();
  }

  const zoom = (e)=>{
    if(e.target.localName ==="img"){
        if(e.deltaY < 0){
          e.target.style.width = "90%";
          e.target.style.height = "90%";
        }else{
          e.target.style.width = "auto";
          e.target.style.height = "auto";
        }
    }
  }
  useEffect(()=>{
    props.isRef.current.style.width ="auto";
    props.isRef.current.style.height ="auto";
  })
  return (
    <>
        <Background />
        <Modal onClick={close} className="fixed-bottom">
          <Conteudo className="m-2 mb-3" onWheel={zoom}>
              {props.is}
              <BotaoFechar><GrClose onClick={props.close}/></BotaoFechar> 
          </Conteudo>
        </Modal>
    </>
  );
}
const Image = (props) => {

  const divRef = useRef()
  const ref = useRef()
  const [loading, setLoading] = useState(true)
  const [preview, setPreview] = useState(false)


  useEffect(() => {
    if(props.max && !loading){
      divRef.current.style.width= "100%";
    }
    if(props.rounded && !loading){
      divRef.current.style.borderRadius = "50%";
    }
  })
  const onLoaded = () =>{
     setLoading(false);
     ref.current.style.display= "inline";
  }
  const image =<img src={props.link} alt="" ref={ref}
                    style={{display:"none",height:props.h,width:props.w}}
                    onLoad={onLoaded}
                    onClick={props.disablePreview ? null: ()=>setPreview(true)}
                    onDoubleClick={props.disablePreview ? null: ()=>setPreview(true)} />
  let imagePre = (!props.disablePreview) ? <ImagePreview close={()=>setPreview(false)} is={image} isRef={ref}/>:null;
  return (
    
       <Container ref={divRef}>
          {loading && <Loading />}
          {image}
          {preview && imagePre}
       </Container>
  )
}

const LazyImage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ default: Image }), 500);
  });
});
export default LazyImage