import { useEffect, useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';

function Auth(props) {

  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    api.get('user/')
      .then(() => {
        setAuth(true);
      })
      .catch((error) => {
        // console.log(error.response.status)
        setAuth(false);
        router.push('/login');
      });
  });

  if (auth) {
    return (
      <>{props.children}</>
    )
  } else {
    return <></>;
  }
}

export default Auth;
