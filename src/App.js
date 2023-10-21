import './App.css';
import api from './api/axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    console.log('Dados enviados: ', username, password, email, role);
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      role: [role]
    };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data); // Fazer algo com os dados da resposta
    } catch (error) {
      console.error('Houve um erro ao enviar os dados', error);
    }
  };

  return (
    <div>
      <form className='formSignup' onSubmit={handleSubmit}>
        <h1 className='h1Signup'>Cadastro</h1>
        <input className='inputSignup'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className='inputSignup'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className='inputSignup'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className='dropSignup'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Selecione uma opção</option>
          <option value="admin">Admin</option>
          <option value="comprador">Comprador</option>
          <option value="vendedor">Vendedor</option>
          {/* Adicione mais opções conforme necessário */}
        </select>

        <button className='buttonSignup' type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
