import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Content, Form, Footer } from './styles';
import { BiNews } from 'react-icons/bi';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,

        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        try {
            const response = await api.post('/autenticar/', data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);
            localStorage.setItem('id', response.data.id);
            if(response.data.image_url) localStorage.setItem('image_url', response.data.image_url);
            this.setState({ loading: false });
            this.props.navigate('/');
        } catch (error) {
            toast.error('E-mail ou senha incorretos');
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
                <Content >
                    <Link to="/" >
                        <BiNews/>
                        <h5>News</h5>
                    </Link>
                    <h3>Entrar no News</h3>
                    <Form method="POST" onSubmit={this.handleSubmit}>
                        <input name="email" type="email" placeholder="E-mail" required
                            onChange={this.handleChange} value={this.state.email} />
                        <input name="password" type="password" placeholder="Senha" required
                            onChange={this.handleChange} value={this.state.password} />

                        <button type="submit"> {loading ? 'Carregando...' : 'Entrar'}</button>
                    </Form>
                    <Footer>
                        Novo no News? <Link to="/register">Crie sua conta agora</Link>
                    </Footer>
                </Content>
            </>
        );
    }
}