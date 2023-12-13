import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {News, Conteudo, Dados, DivRigth, Version} from './styles'
import api from '../../services/api';
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Image from "../../components/Image";
import skull from "../../svgs/skull2.gif"



export default class Principal extends Component {
 constructor(props) {
     super(props);
     this.state = {
        news:[],
        isLoading: true
    };
     
 };   
 handleInputChange = e => {
 };

 async componentDidMount() {
        try {
            const news = await api.get(`/allNews/`);
            this.setState({news:news.data});
        } catch (e) {
            toast.error("Não foi possivel conectar ao servidor...");
        }
        this.setState({isLoading:false})
        document.title = "News"
  }
  
 render() {
   const {news,isLoading} = this.state;
    return (
        isLoading ? <Loading isPage={true} />:
        <>
        <Conteudo>
        {news.map(materia =>
            <News>
            <Link className="w-100" to={"/verMateria/"+ materia.route_id}>
                <Suspense fallback={<Loading noMax={true} />}>
                    <Image className="img-thumbnail rounded-circle" link={materia.image_url} disablePreview={true} max={false} h={60} w={60} />
                </Suspense> 
                <Dados>
                    <h5>{materia.title}       - {materia.created_at.substring(8,10)}/{materia.created_at.substring(5,7)}/{materia.created_at.substring(0,4)}</h5>
                    <h6>{materia.subtitle}</h6>
                </Dados>
            </Link>
            </News>
            )}
        </Conteudo>
        <DivRigth>
            <Link to="/" >
                <img width={50} height={50} src={skull} alt="logo" />
                
                <h5><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2></h5>
            </Link>
            <Version>
                <h6>by gui</h6>
                <h6>v1.0.0alpha</h6>
            </Version>
        </DivRigth>
        </>
    );
 }
}

