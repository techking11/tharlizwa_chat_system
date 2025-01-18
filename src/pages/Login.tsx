import React, { useState } from 'react';
import Signin from '../components/Signin/Signin';
import PageLoading from '../components/Loading/PageLoading';

function Login(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => setLoading(false), 2000);

  return loading ? <PageLoading /> : <Signin />;
}

export default Login;
