import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const DeleteAccountModal = ({ onDelete }) => {
    const [accountId, setAccountId] = useState('');
  
    const handleDelete = () => {
      onDelete(accountId);
    };
  
    return (
      <div>
        <Form.Group controlId="accountId">
          <Form.Label>ID da Conta:</Form.Label>
          <Form.Control type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        </Form.Group>
        <Button variant="danger" className='mt-2' onClick={handleDelete}>Confirmar Exclusão</Button>
      </div>
    );
  };
  
const ChangePasswordModal = ({ onPasswordChange }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleChangePassword = () => {
      onPasswordChange(currentPassword, newPassword);
    };
  
    return (
      <div>
        <Form.Group controlId="currentPassword">
          <Form.Label>Senha Atual:</Form.Label>
          <Form.Control type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="newPassword">
          <Form.Label>Nova Senha:</Form.Label>
          <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </Form.Group>
        <Button variant="success" className='mt-2' onClick={handleChangePassword}>Trocar senha</Button>
      </div>
    );
  };
export {DeleteAccountModal, ChangePasswordModal}