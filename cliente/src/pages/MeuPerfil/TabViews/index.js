import { FaUser } from "react-icons/fa"
import Image from "../../../components/Image"
import { BiNews, BiTrash, BiKey, BiExit } from "react-icons/bi";
import {AiOutlineTool, AiOutlineAliwangwang, AiFillFolderOpen} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { DivTab, Tab, Tabs, Btns } from "./styles"
import { useState, useEffect } from "react";
import { Button, Modal} from "react-bootstrap";
import api from "../../../services/api"
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { ChangePasswordModal,DeleteAccountModal } from "../../../components/Modal";
import { timeAgo } from "../../../scripts/jqueryFunctions";

const logout = () =>{
  localStorage.removeItem('token')
  localStorage.removeItem('user');
  localStorage.removeItem('type');
  localStorage.removeItem('id');
  localStorage.removeItem('ademir');
  localStorage.removeItem('image_url');
  window.location.href = '/login';
}
const MeusDados = () => {
    const [dados, setDados] = useState({});
    const [createdAt, setCreatedAt] = useState("");
    const [modoEdicao, setModoEdicao] = useState(false);
    
    useEffect(() => {
      (async () => {
        const response = await api.get("/user/");
        setCreatedAt(timeAgo( new Date(Date.parse(response.data.created_at))));
        const { created_at, id, ...dadosAtualizados } = response.data;
        setDados(dadosAtualizados);

      })();
    }, []);
  
    const handleChange = (event, field) => {
      setDados(prevDados => ({
        ...prevDados,
        [field]: event.target.value
      }));
    };
    const updateProfile = async ()=>{
      try {
        await api.put("/user/"+dados.id, dados);
        localStorage.setItem("user", dados.username)
        setModoEdicao(!modoEdicao)
        toast.success("Dados atualizados");
      } catch (e) {
        toast.error("Email ou nick ja em uso");
      }
    }
  
    return (
      <DivTab>
        <h5><AiFillFolderOpen size={25}/>Meus dados</h5>
        <Tabs>
        {Object.entries(dados).map(([key, value], index) => (
          <Tab key={index}>
            <strong>{key}:</strong>
            {modoEdicao ? (
              <Form.Control
                type="text"
                value={value}
                className="mt-2"
                onChange={event => handleChange(event, key)}
              />
            ) : (
              <h6>{value}</h6>
            )}
          </Tab>
        ))}
        <Tab>
            <strong>Criada há:</strong>
            <h6 >{createdAt}</h6>
        </Tab>
        </Tabs>
        {modoEdicao ? <Btns>
          <Button variant="success" onClick={updateProfile}>Salvar</Button>
          <Button variant="danger" className="mt-1" onClick={() => setModoEdicao(!modoEdicao)}>Cancelar</Button>
        </Btns>
          :<Button variant="primary" onClick={() => setModoEdicao(!modoEdicao)}>Editar</Button>}
        <Link to="/" >
            <h6>by</h6>
                <BiNews/>
                <h6>News</h6>
        </Link>
      </DivTab>
    );
};

const Avatar = () => {
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(localStorage.getItem("image_url"));
    useEffect(()=>{
        const token = localStorage.getItem('token');
        api.defaults.headers.Authorization = `Bearer ${token}`;
    })
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImageFile(file);

      const reader = new FileReader();
  
      reader.onload = () => {setSelectedImage(reader.result);};
  
      if (file) reader.readAsDataURL(file);
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("image", selectedImageFile);

            const response = await api.post(`/update_ft`, data);

            localStorage.setItem("image_url", response.data.image_url)
            toast.success("Imagem atualizada")   
        } catch (error) {
            
            toast.error("Erro ao atualizar imagem") 
        }   
    }
  
    return (
      <DivTab>
        <h5><AiOutlineAliwangwang size={25}/>Meu Avatar</h5>
        {selectedImage ? <Image rounded={true} max={false} link={selectedImage} h={300} w={300} />
         : [<FaUser color={'#343a40'} className="uploud_ft" key="icon" />, <span key="text">Sem foto</span>]}

        <input className="input" type="file" accept="image/*" onChange={handleImageChange}  />
        {selectedImageFile ? <Button onClick={handleSubmit} variant="dark">Atualizar</Button>: null}
        <Link to="/" >
            <h6>by</h6>
                <BiNews/>
                <h6>News</h6>
        </Link>
      </DivTab>
    );
};

const Conta = () => {
  const [id] = useState(localStorage.getItem('id'));
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalShow(true);
  };

  const handleDeleteAccount = async (accountId) => {
    if(accountId !== id) return toast.error("Id da conta incorreto")
    try {
      const response = await api.delete(`/user/${id}`)
      if (response.data.status === "error") throw new Error("Erro ao deletar conta");  
      setModalShow(false);
      toast('Bye bro 💀', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setTimeout(()=>logout(),1000)
    } catch (e) {
      toast.error(e.message);
    }    
  };

  const handleChangePassword = async (currentPassword, newPassword) => {
    const data = new FormData();
    data.append("current_password",currentPassword)
    data.append("new_password",newPassword)

    try {
      const response = await api.put(`user/${id}/edit`, data);
      if (response.data.status === "error") throw new Error("Erro ao atualizar senha");
      toast.success("Senha alterada");
      setModalShow(false);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <DivTab>
      <h5><AiOutlineTool size={25}/> Minha conta</h5>
      <strong className="id_conta">Id da conta: {id}</strong>
      <Tabs>
        <Tab>
          <span className="text-primary" onClick={logout}>
            <BiExit /> Sair 
          </span>
        </Tab>
        <Tab>
          <span className="text-warning" onClick={() => handleModalOpen('Trocar senha', <ChangePasswordModal onPasswordChange={handleChangePassword} />)}>
            <BiKey /> Trocar senha
          </span>
        </Tab>
        <Tab>
          <span className="text-danger" onClick={() => handleModalOpen('Deletar conta', <DeleteAccountModal onDelete={handleDeleteAccount} />)}>
            <BiTrash /> Deletar conta
          </span>
        </Tab>
      </Tabs>
      <Link to="/">
        <h6>by</h6> <BiNews /> <h6>News</h6>
      </Link>

      <Modal  show={modalShow} onHide={()=>setModalShow(false)} centered>
        <Modal.Header  closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer >
          <Button variant="dark" onClick={()=>setModalShow(false)}> Fechar </Button>
        </Modal.Footer>
      </Modal>
    </DivTab>
  );
};

export {Avatar, MeusDados, Conta}