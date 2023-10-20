import './App.css';
import api from './api/axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      role: [role]
    };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup-signup', data, {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="role"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
