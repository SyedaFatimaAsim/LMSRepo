// src/Login.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #555555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const navigateScreen=()=>
  {
    navigate(`/dashboard`)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server for authentication
    console.log('Username:', username);
    console.log('Password:', password);
    navigateScreen();
    // You can add your authentication logic here
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
