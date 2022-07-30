import React, { Component } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Content,Caixa, Form} from './styles';
export default class LoginAdmin extends Component {
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
            const response = await api.post('/adminHehe/', data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);
            localStorage.setItem('id', response.data.id);
            this.setState({ loading: false });
            this.props.history.push('/');
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
               <Content>
                    <Caixa>
                        <Form method="POST" onSubmit={this.handleSubmit}>
                            <h1>Área Privada...Você não deveria saber sobre ela...</h1>
                            <input name="email" type="text" placeholder="Nick" required
                                           onChange={this.handleChange} value={this.state.email} />
                            <input name="password" type="password" placeholder="Senha" required
                                           onChange={this.handleChange} value={this.state.password} />
                             <button type="submit"> {loading ? 'Carregando...' : 'Entrar'}</button>
                        </Form>
                    </Caixa>
                </Content>
            </>
        );
    }
}