import { Component, createRef } from "react";
import api from '../../services/api';
import { toast } from "react-toastify";
import {Conteudo, Ads, Title, DivImage , Intro, Desenvolvimento , Conclusao, VetImages, VetLinks} from './styles'
import Loading from "../../components/Loading";
import Image from "../../components/Image";
import { markup } from "../../components/MapText";

export default class Materia extends Component{
 constructor(props){
    super(props);
    this.state = {
        title:'',
        subtitle:'',
        intro:'',
        dev:'',
        conc:'',
        creador:'',
        data:'',
        imageUrl:'',
        vetImages:'',
        vetLinks:'',
        isLoading: true
    };
    this.divAds = createRef();
    this.divConteudo = createRef();
    window.addEventListener("resize", ()=>this.adjustAds());
 }
 async componentDidMount(){
    try {
        const materia = await api.get(`/materia/`+this.props.match.params.id);
        let fixImages = null;
        if(materia.data.vet_images) fixImages = materia.data.vet_images.substr(0,materia.data.vet_images.length-9)
        this.setState({
            title:materia.data.title,
            subtitle:materia.data.subtitle,
            intro:materia.data.intro,
            dev:materia.data.dev,
            conc:materia.data.coc,
            creador:materia.data.creador,
            data:materia.data.created_at,
            imageUrl:materia.data.image_url,
            vetImages:fixImages,
            vetLinks:materia.data.vet_links
        });
    } catch (e) {
        toast.error("Não foi possivel conectar ao servidor...");
    }
    document.title = this.state.title;
    this.setState({isLoading: false})
 }
 adjustAds(){
     if(window.innerWidth<600 && this.divAds.current){
        this.divAds.current.style.display = 'none'
        this.divConteudo.current.style.width = '100%'
     }
 }
 openLink(e,link){
    e.preventDefault();
    var url = new URL("https://"+link)
    window.open(url);
 }
 render(){
    const {isLoading,title,subtitle,data,intro,dev,conc,imageUrl,vetImages,vetLinks} = this.state;
    
    return(
        isLoading ? <Loading isPage={true}/>:
        <>
        <Conteudo  max={window.innerWidth} ref={this.divConteudo}>
            <Title>
                    <h1>{title}</h1>
                    <h6>{data}</h6>
                    <h4>{subtitle}</h4>
            </Title>
            <DivImage>
               <Image max={true} link={imageUrl} h={300} w={"100%"}/>
            </DivImage>
            <Intro>
                {markup(intro).map(str => <p dangerouslySetInnerHTML={{__html: str}}></p>)}
            </Intro>
            <Desenvolvimento>
                {markup(dev).map(str => <p dangerouslySetInnerHTML={{__html: str}}></p>)}
            </Desenvolvimento>
            <VetImages>
                <h5>Imagens:</h5>
                <div>
                    {vetImages ? 
                        vetImages.split(`<newline>`).map(linkImage=>
                            <Image link={linkImage} max={false} h={200} w={200}/>)
                        :<h6>Essa matéria não possui nenhuma imagem</h6>}
                </div>
            </VetImages>
            <Conclusao>
                {markup(conc).map(str => <p dangerouslySetInnerHTML={{__html: str}}></p>)}
            </Conclusao>
            <VetLinks>
                <h5>Links:</h5>
                <div>
                    {vetLinks ? 
                        vetLinks.split(`<newline>`).map((info)=>{
                            let [nome,link] = info.split(`<link>`)
                            return <a onClick={(e)=>this.openLink(e,link)} target="_blank" rel="noreferrer" href={link} >{nome}</a>
                        })
                        :<h6>Essa matéria não possui nenhum link</h6>}
                </div>
            </VetLinks>
        </Conteudo>
        {window.innerWidth > 800 &&
                    <Ads ref={this.divAds}>
                      
                    </Ads>
                    }
        </>
    );
 }
}