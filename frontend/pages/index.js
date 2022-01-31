import Auth from '../components/Auth';
import api from '../services/api';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const logout = () => {
    api.post('logout/');
    router.push('/');
  };

  return (
    <Auth>
      Página restrita.
      <br />
      <span onClick={logout} className="logout">Sair</span>
    </Auth>
  );
}
