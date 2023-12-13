import React, { Component } from "react";
import api from "../../services/api";
import { Head, Results, Content, ResultsBar, Result, ResultColumn } from "./styles";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import Image from "../../components/Image";
import { Link } from 'react-router-dom';
import {Filtro} from "../../components/Filtro";
import { filtroBase } from "../../data/arrays";
import skull from "../../svgs/skull2.gif"
 
export default class Busca extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            dataFiltro: null,
            isLoading:true
        }
    }
    async componentDidMount(){
        const results = await api.get("/busca/"+this.props.id);
        this.setState({results: results.data, isLoading:false});
    }
    async componentDidUpdate(prevProps, prevState){
        if (this.props.id !== prevProps.id ) {
            this.setState({isLoading:true})
            const results = await api.get("/busca/"+this.props.id);
            this.setState({results: results.data, isLoading:false});
        }
        if(this.state.dataFiltro !== prevState.dataFiltro) {
            this.setState({isLoading:true})
            const {dataFiltro} = this.state;
            const results = await api.put("/busca/"+this.props.id, dataFiltro);
            this.setState({results: results.data, isLoading:false});
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({dataFiltro: data});
      };
    render(){
        const {results, isLoading} = this.state;
        return(
        isLoading ? <Loading isPage={true}/>:
        <Content>
            <Head>
                <h3><sNb1>N</sNb1><sNb2>e</sNb2><sNb1>w</sNb1><sNb2>s</sNb2>, explorando end-points, garantindo o acesso a informação.</h3>
                <SearchBar initial={this.props.id} navigate={this.props.navigate} finalUrl={"/busca/"}/>
            </Head>
            <ResultsBar className="p-4">
                    <h6 className="result-title">Resultados da pesquisa:</h6>
                    <Filtro formData={filtroBase} handleSubmit={this.handleSubmit}/>
            </ResultsBar>
            <Results className="list-group list-group-flush">
                {results.length>0? results.map(result =>
                    <Link className="w-100" to={"/verMateria/"+ result.route_id}>
                    <Result className="list-group-item">
                        <ResultColumn>{result.id}</ResultColumn>
                        <Image className="img-thumbnail rounded-circle" link={result.image_url} disablePreview={true} max={false} h={60} w={60} /> 
                        <ResultColumn><strong>{result.title}</strong></ResultColumn>
                        <ResultColumn>{result.subtitle}</ResultColumn>
                        <ResultColumn >{result.creador}</ResultColumn>
                    </Result>
                    </Link>
                    
                ):<h6>Sem Resultados</h6>}
            <img width={50} height={50} src={skull} alt="logo" />
            </Results>
        </Content>
        )
    }
}