import React, { Component } from 'react';
import { Container, DivPerfil, NavPerfil, Options, Conteudo } from './styles';
import {Avatar, MeusDados, Conta} from './TabViews';

export default class MeuPerfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: 'Avatar',
      activeTab: 'Avatar'
    };
  }

  handleButtonClick = (name) => {
    this.setState({ activeButton: name });
    this.setState({ activeTab: name });
  };

  content = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case 'Avatar':
        return <Avatar/>
      case 'MeusDados':
        return <MeusDados/>
      case 'Conta':
        return <Conta/>
      default:
        return null;
    }
  };

  render() {
    const { activeButton } = this.state;
    return (
      <Container>
        <DivPerfil>
          <NavPerfil>
            <Options className="nav flex-column nav-pills">
              <button
                className={`nav-link ${activeButton === 'Avatar' ? 'active' : ''}`}
                onClick={() => this.handleButtonClick('Avatar')}
              >Avatar</button>
              <button
                className={`nav-link ${activeButton === 'MeusDados' ? 'active' : ''}`}
                onClick={() => this.handleButtonClick('MeusDados')}
              >Meus Dados</button>
              <button
                className={`nav-link ${activeButton === 'Conta' ? 'active' : ''}`}
                onClick={() => this.handleButtonClick('Conta')}
              >Conta</button>
            </Options>
          </NavPerfil>
          <Conteudo>
                {this.content()}
          </Conteudo>
        </DivPerfil>
      </Container>
    );
  }
}
