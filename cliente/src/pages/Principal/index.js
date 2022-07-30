import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {News, Conteudo, Dados, BoasVindas} from './styles'
import api from '../../services/api';
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Image from "../../components/Image";

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
        document.title = "News"
        this.setState({isLoading:false})
  }
 render() {
   const {news,isLoading} = this.state;
    return (
        isLoading ? <Loading isPage={true} />:
        <>
        <Conteudo max={window.innerWidth} >
        {news.map(materia=>(
            
             <News>
                 <Link to={"verMateria/"+materia.route_id} >
                    <Image link={materia.image_url} max={false} h={60} w={60}/>
                 <Dados>
                 <h5>{materia.title}       - {materia.created_at.substring(8,10)}/{materia.created_at.substring(5,7)}/{materia.created_at.substring(0,4)}</h5>
                 <h6>{materia.subtitle}</h6>
                 </Dados>
                 </Link>
             </News>
        ))}
        </Conteudo>
        {window.innerWidth > 800  &&
        <BoasVindas>
            <h5>News</h5>
            <br/>
            <h6 className="topico" >Sobre:</h6>
            <h6>Olá sou Guilherme, tenho 18 anos, criei esse site com o objetivo de divulgar noticias de forma facil e direta</h6>
            <br/>
        </BoasVindas>
        }
        </>
    );
 }
}

