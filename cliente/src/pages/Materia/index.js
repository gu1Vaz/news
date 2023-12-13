import { Component, createRef } from "react";
import api from '../../services/api';
import { toast } from "react-toastify";
import {Conteudo, Ads, Title, DivImage , Intro, Desenvolvimento , Conclusao, VetImages, VetLinks,VetFiles, Comment, CommentsDiv, CommentBar, BtsCommentBar, Comments} from './styles'
import Loading from "../../components/Loading";
import Image from "../../components/Image";
import { markup } from "../../components/MapText";
import { scrollingChat, timeAgo } from "../../scripts/jqueryFunctions";
import { BiShareAlt} from "react-icons/bi"; 
import {FaUserCircle} from "react-icons/fa"; 

export default class Materia extends Component{
 constructor(props){
    super(props);
    this.state = {
        materia_id : 0,
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
        vetFiles:'',
        comments:[],
        comment_count: 15,
        loadedAllComments: false,
        num_comments:0,
        isSrolling: false,
        isSrollingTimer:false,
        isLoading: true,
        isTyping: false
    };
    this.divAds = createRef();
    this.divConteudo = createRef();
    this.inputComment = createRef();
    window.addEventListener("resize", ()=>this.adjustAds());
 }
 async componentDidMount(){
    const token = localStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    try {
        const materia = await api.get(`/materia/`+this.props.id);

        const comments = await api.get(`/comments/`+materia.data.id);

        this.setState({materia_id: materia.data.id})
        
        this.setState({
            title:materia.data.title,
            subtitle:materia.data.subtitle,
            intro:materia.data.intro,
            dev:materia.data.dev,
            conc:materia.data.coc,
            creador:materia.data.creador,
            data:materia.data.created_at,
            imageUrl:materia.data.image_url,
            vetImages: materia.data.vet_images,
            vetLinks:materia.data.vet_links,
            vetFiles:materia.data.vet_files,
            comments:comments.data,
            num_comments: materia.data.num_comments
        });
        this.setState({isLoading: false})
    } catch (e) {
        toast.error("Não foi possivel conectar ao servidor...");
    }
    document.title = this.state.title;
 }
 adjustAds(){
     if(window.innerWidth<600 && this.divAds.current){
        this.divAds.current.style.display = 'none'
        this.divConteudo.current.style.width = '100%'
     }
 }
 share(){
    navigator.clipboard.writeText(window.location.href);
    toast('🔗 Link Copiado!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
 }
 openLink(e,link){
    e.preventDefault();
    const base = (link.includes("http://")) ? "" : "https://";
    const url = new URL(base+link)
    window.open(url);
 }
 onBlur = async (e)=>{
    if(e.relatedTarget?.tagName !== "BUTTON") this.setState({isTyping:false})
 }
 handleScroll = async (e) => {
    let {materia_id, loadedAllComments, isSrollingTimer, comments, comment_count} = this.state;
    
    if (e.target.getBoundingClientRect().bottom <= window.innerHeight && !isSrollingTimer) {
        this.setState({isSrollingTimer: true})
        this.setState({isSrolling: true})
        try{
            if(!loadedAllComments){
                let new_comments = (await api.get(`/comments/`+materia_id+"/"+this.state.comment_count)).data;  
                if(new_comments.length > 0){
                    new_comments = comments.concat(new_comments)
                    this.setState({comment_count:comment_count+15, comments: new_comments}) 
                }else this.setState({loadedAllComments:true}) 
            }
            this.setState({isSrolling: false})
        }catch(e){
            setTimeout(() => {
                this.setState({isSrolling: false})
            }, 1000);   
        }
        setTimeout(() => {
            this.setState({isSrollingTimer: false})
        }, 2000);
     }
  }
 store_comment = async (e) =>{
    if(!localStorage.getItem('id') > 0) this.props.navigate('/login'); 
    let {materia_id} = this.state;
    try {
        const data = new FormData();
        data.append("materia_id", materia_id)
        data.append("value", this.inputComment.current.innerText)

        await api.post(`/comments/`, data);
        const new_comments = await api.get(`/comments/`+materia_id);

        this.setState({loadedAllComments:false, comments: new_comments.data, comment_count: 15, num_comments: this.state.num_comments+1})
        scrollingChat("divComments", 500)
        this.inputComment.current.innerText = ""
        this.setState({isTyping:false})
        toast.success("Comentario enviado")
    } catch (e) {
        toast.error("Usuario não autenticado")
    }
 }
 render(){
    const {isLoading, isSrolling, isTyping, title, subtitle, data, intro, dev, conc, imageUrl, vetImages,vetLinks,vetFiles, comments, num_comments} = this.state;
    const imagePerfil = localStorage.getItem("image_url");
    return(
        isLoading ? <Loading isPage={true}/>:
        <>
        <Conteudo  max={window.innerWidth} ref={this.divConteudo}>
            <Title>
                    <h1>{title}</h1>
                    <h6 className="d-flex flex-row align-items-center">
                        {data} 
                        <button onClick={this.share} className="btn btn-sm btn-light m-2">
                            <BiShareAlt color="black" size={20}/> Compartilhar
                        </button>
                    </h6>
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
            <VetFiles>
                <h5 >Payloads:</h5>
                <div>
                    {vetFiles ? 
                        vetFiles.split(`<newline>`).map((link_file)=>{
                            let splited = link_file.split(`/`)
                            return <a onClick={(e)=>this.openLink(e,link_file)} target="_blank" rel="noreferrer" href={link_file} >{splited[splited.length -1]}</a>
                        })
                        :<h6>Essa matéria não possui nenhum payload</h6>}
                </div>
            </VetFiles>
            <CommentsDiv>
                <h5>{num_comments} comentários</h5>
                <CommentBar>
                    <div className="bar">
                        {imagePerfil ? <Image link={imagePerfil} max={false} rounded={true} h={28} w={28}/> : <FaUserCircle size={28}/>}
                        <span ref={this.inputComment} onBlur={this.onBlur} onFocus={()=>this.setState({isTyping:true})} 
                            className="textarea" role="textbox" contentEditable></span>
                        </div>
                    {isTyping ? 
                        <BtsCommentBar className="btsCommentBar">
                            <button className="btn btn-light btn-cancelar" onClick={()=>this.setState({isTyping:false})}>Cancelar</button>
                            <button className="btn btn-dark btn-comentar" onClick={this.store_comment}>Comentar</button>
                        </BtsCommentBar> : <></>}
                    
                </CommentBar>
                <Comments id="divComments" onScroll={this.handleScroll}>
                    {comments.length>0 ? comments.map(comment=>{
                        return <Comment>
                                {comment.image_url ? <Image link={comment.image_url} max={false} rounded={true} h={28} w={28}/> : <FaUserCircle size={28}/>}
                                <div >
                                    <div>
                                        <span className="nick-in-comment">{comment.username}</span>
                                        <span className="timeAgo">há {timeAgo( new Date(Date.parse(comment.created_at)))}</span>
                                    </div>
                                    <span>{comment.value}</span>
                                </div>
                            </Comment>
                    }): <h6>Essa materia ainda não possui comentarios...</h6> }
                    {isSrolling ? "Carregando....": ""}
                </Comments>
            </CommentsDiv>
        </Conteudo>

        {window.innerWidth > 800 &&
                    <Ads ref={this.divAds}>
                      
                    </Ads>
                    }
        </>
    );
 }
}