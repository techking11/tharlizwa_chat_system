import React, { useState } from 'react';
import Signup from '../components/Signup/Signup';
import PageLoading from '../components/Loading/PageLoading';

function Register(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => setLoading(false), 2000);
  return loading ? <PageLoading /> : <Signup />;
}

export default Register;
