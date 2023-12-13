import React, { Component } from 'react';
import {Caixa, Coluna, TextArea, Input, ImagesArea} from './styles'
import api from '../../services/api';
import { toast } from "react-toastify";

export default class Admin extends Component {
 constructor(props) {
     super(props);
     this.state={
         title:'',
         subtitle:'',
         creador: localStorage.getItem("user"),
         route_id:'',
         intro : '',
         dev : '',
         conc : '',
         image:null,
         vetImages:[],
         vetFiles:[],
         vetLinks:'',
         cout:0,
         nameCout:'None',
         maxCout:0,
         prevKey:'',
         maxKeys:{route_id:100,image_url:256,vetLinks:500,
                  title:254,subtitle:254,intro:900,dev:25000,conc:900,creador:25}
     }
     this.fileInput = React.createRef();
 }
 componentDidMount(){
    const token = localStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${token}`;
 }
 logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('user');
  localStorage.removeItem('type');
  localStorage.removeItem('id');
  window.location.href = '/loginAdminHoho';
  }
 addLink = (e)=>{
  this.setState({prevKey:e.code});
  if(e.key === 'Enter'){
    this.setState({vetLinks : this.state.vetLinks+"<newline>"})
  }
  if(e.code === 'Space' && this.state.prevKey === 'Space'){
    this.setState({vetLinks : this.state.vetLinks+"<link>",prevKey:''})
  }
 }
 addLine = (e)=>{
  if(e.key === 'Enter'){
    this.setState({[e.target.name] : e.target.value+"<newline>"})
  }
 }
 handleSubmit = async e => {
  e.preventDefault();
  const data = new FormData();
  data.append("title",this.state.title)
  data.append("subtitle",this.state.subtitle)
  data.append("creador",this.state.creador)
  data.append("route_id",this.state.route_id)
  data.append("intro",this.state.intro)
  data.append("dev",this.state.dev)
  data.append("coc",this.state.conc)
  data.append("vetLinks",this.state.vetLinks)
  data.append("image",this.state.image,this.state.image.name);
  [...this.state.vetImages].forEach(image => {
    data.append("vetImages",image)
  });
  [...this.state.vetFiles].forEach(file => {
    data.append("vetFiles",file)
  });
  try{
      await api.post(`/news/`,data);
      toast.success('Sucesso bro');
  }catch(e){
      toast.error('Erro na comunicação com o servidor');
  }
}
 handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({nameCout:e.target.name});
    this.setState({cout:e.target.value.length});
    this.setState({maxCout:this.state.maxKeys[e.target.name]});
    if(e.target.value.length === this.state.maxKeys[e.target.name])
            toast.info("Ja deu o maximo nesse")
 }
 handleImageChange = async e => {
  const image = e.target.files[0]
  await this.setState({ image });
 };
 fileSelectedHandler = async (e) => {
  if(e.target.id === "vetImages") await this.setState({ vetImages: [...this.state.vetImages, ...e.target.files] })
  if(e.target.id === "vetFiles") await this.setState({ vetFiles: [...this.state.vetFiles, ...e.target.files] })
 }
 render() {
   const {cout, nameCout, maxCout} = this.state;
    return (
        <>
          <Caixa>
              <Coluna>
                <h6>Rota:</h6>
                <Input className="form-group">
                    <input autoFocus={true} name="route_id" className="form-control w-100"  
                                onChange={this.handleChange} value={this.state.route_id}/>
                </Input>
                <h6>Titulo</h6>
                <Input className="form-group">
                    <input name="title" className="form-control w-100"  
                                onChange={this.handleChange} value={this.state.title}/>
                </Input>
                <h6>SubTitulo</h6>
                <Input className="form-group">
                    <input name="subtitle" className="form-control w-100"  
                                onChange={this.handleChange} value={this.state.subtitle}/>
                </Input>
                <h6>Criador</h6>
                <Input className="form-group">
                    <input name="creador" className="form-control w-100"  
                                onChange={this.handleChange} value={this.state.creador}/>
                </Input>
                <h6>Links</h6>
                <TextArea className="form-group">
                    <textarea name="vetLinks" className="form-control w-100"   rows="6"
                                onChange={this.handleChange}
                                onKeyPress={this.addLink}  value={this.state.vetLinks}/>
                </TextArea>
              </Coluna>
              <Coluna>
                <h6>Introdução</h6>
                <TextArea className="form-group">
                    <textarea name="intro" className="form-control w-100"   rows="8"
                                onChange={this.handleChange}
                                onKeyPress={this.addLine} value={this.state.intro}/>
                </TextArea>
                <h6>Desenvolvimento</h6>
                <TextArea className="form-group">
                    <textarea name="dev" className="form-control w-100"   rows="8"
                                onChange={this.handleChange} 
                                onKeyPress={this.addLine} value={this.state.dev}/>
                </TextArea>
              </Coluna>
              <Coluna>
                <h6>Conclusão</h6>
                <TextArea className="form-group">
                    <textarea name="conc" className="form-control w-100"   rows="8"
                                onChange={this.handleChange}
                                onKeyPress={this.addLine} value={this.state.conc}/>
                </TextArea>
                <h6>Imagens</h6>
                <ImagesArea className="form-group">
                    <input accept="image/png, image/jpeg"  
                           ref={this.fileInput} name="image" type="file" 
                           onChange={this.handleImageChange}/>
                    <input id="vetImages" type="file" multiple onChange={this.fileSelectedHandler} />
                </ImagesArea>
                <h6>Payload</h6>
                <input className='mb-2' id="vetFiles" type="file" multiple onChange={this.fileSelectedHandler} />
                <button className="btn btn-success" onClick={this.handleSubmit}>Criar</button>
                <div className="mt-2">
                  {nameCout+":"+cout}
                </div>
                <div>
                  {"Max de "+nameCout+": "+maxCout}
                  <button className="btn btn-danger w-25 mt-2 ms-5" onClick={this.logout}>Logout</button>
                </div>
              </Coluna> 
          </Caixa>
          
        </>
    );
 }
}