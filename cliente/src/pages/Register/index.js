import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { BiNews } from 'react-icons/bi';
import { Content, Form, Footer } from './styles';
export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            loading: false,

        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        try {
            const response = await api.post(`/registrar/`, data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);
            localStorage.setItem('id', response.data.id);
            if(response.data.image_url) localStorage.setItem('image_url', response.data.image_url);;
            this.setState({ loading: false });
            toast.success('Conta criada!');
            this.props.navigate('/');
        } catch (error) {
            toast.error('Falha ao inserir usuário');
            this.setState({ loading: false });
        }
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { loading } = this.state;
        return (
            <>
                <Content>
                    <Link to="/" >
                        <BiNews/>
                        <h5>News</h5>
                    </Link>
                    <h3>Criar conta</h3>
                    <Form method="POST" onSubmit={this.handleSubmit}>
                        <input name="username" type="text" placeholder="Nome" required
                            onChange={this.handleChange} value={this.state.username} />
                        <input name="email" type="email" placeholder="E-mail" required
                            onChange={this.handleChange} value={this.state.email} />
                        <input name="password" type="password" placeholder="Senha" required
                            onChange={this.handleChange} value={this.state.password} />

                        <button type="submit"> {loading ? 'Carregando...' : 'Cadastrar'}</button>
                    </Form>
                    <Footer>
                    Já possui uma conta? <Link to="/login">Faça o seu login</Link>
                    </Footer>
                </Content>
            </>
        );
    }
}