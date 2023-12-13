import React, { Component, createRef } from 'react';
import { Background, Feed, CenteredDiv, Btns } from './styles';
import api from '../../../services/api';
import Loading from '../../../components/Loading/index'
import { Link } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
      feedbacks: [],
      isTyping:false,
      loading: true
    };
    this.inputFeed= createRef();
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const response = await api.get("/allFeedbacks/");
      this.setState({ loading:false, feedbacks: response.data }, () => {this.generatePositions(); });
    } catch (error) {
      console.log(error);
    }
  }

  generateRandomPosition() {
    const min = 10;
    const max = 70;
    return {
      top: `${Math.random() * (140 - max) + min}vh`,
      left: `${Math.random() * (150 - max) + min}vw`,
    };
  }

  generatePositions() {
    const { feedbacks } = this.state;
    const newPositions = feedbacks.map(() => this.generateRandomPosition());
    this.setState({ positions: newPositions });
  }

  handleChange = e => {
    console.log("sla",e.target.value.length)
    if(e.target.value.length > 30) return
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit= async ()=>{
      if(!localStorage.getItem('id') > 0) this.props.navigate('/login'); 
      try {
        const data = new FormData();
        data.append("value", this.inputFeed.current.innerText)
        const response = await api.post("/feedbacks", data)
        this.setState(prevState => ({isTyping: false, feedbacks: [...prevState.feedbacks, response.data]}));
        this.inputFeed.current.innerText = ""
        this.generatePositions()
        toast('Feedback enviado!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

      } catch (e) {
        toast.error("Erro ao enviar feedback")
      }
  }
  onBlur = async (e)=>{
    if(e.relatedTarget?.tagName !== "BUTTON") this.setState({isTyping:false})
  }
  onInput = () => {
    const maxLength = 76;
    const content = this.inputFeed.current.textContent;
    
    if (content.length > maxLength) {
      this.inputFeed.current.textContent = content.slice(0, maxLength);
    }
  }
  render() {
    const { feedbacks, positions, loading, isTyping } = this.state;
    return (
      <>
        <Background>
          {feedbacks.map((feedback, index) => (
            loading? <Loading/>:
            <Feed
              key={index}
              style={{
                position: 'absolute',
                top: positions[index]?.top || 0,
                left: positions[index]?.left || 0,
              }}
            >
              <strong>{feedback.username}</strong>
              {feedback.value}
            </Feed>
          ))}
        </Background>
        <CenteredDiv>
            <Link className='mb-3' to="/" >
                <BiNews/>
                <h6>News</h6>
            </Link>
           <span ref={this.inputFeed} onFocus={()=>this.setState({isTyping:true})} onBlur={this.onBlur} onInput={(e)=>this.onInput(e)} 
                            className="textarea" role="textbox" contentEditable></span>
          {isTyping &&
          <Btns className='mt-4'>
            <Button variant={"outline-danger"} onClick={()=>this.setState({isTyping:false})} >Cancelar</Button>
            <Button variant={"outline-light"} onClick={this.handleSubmit}>Enviar</Button>
          </Btns>
          }
        </CenteredDiv>
      </>
    );
  }
}

export default Feedback;