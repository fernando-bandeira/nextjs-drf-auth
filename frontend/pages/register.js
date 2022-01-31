import { useEffect, useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    api.get('user/')
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        // console.log(error.response.status);
      });
  });

  const postRegister = (e) => {
    e.preventDefault();
    let data = {
      'name': name,
      'email': email,
      'password': password
    };
    api.post('register/', data)
      .then(() => {
        router.push('/login');
      });
  };

  return (
    <div>
      <form method="post" onSubmit={e => postRegister(e)}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link href="/login">
        <a>
          Já possuo uma conta.
        </a>
      </Link>
    </div>
  );
}

export default Register;
