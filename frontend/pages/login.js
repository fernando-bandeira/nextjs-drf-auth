import { useEffect, useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Login() {

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

  const postLogin = (e) => {
    e.preventDefault();
    let data = {
      'email': email,
      'password': password
    };
    api.post('login/', data)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form method="post" onSubmit={e => postLogin(e)}>
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
        <button type="submit">Entrar</button>
      </form>
      <Link href="/register">
        <a>
          Criar conta
        </a>
      </Link>
    </div>
  );
}

export default Login;
