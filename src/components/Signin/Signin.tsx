import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import GoogleButton from '../Signup/GoogleButton';
import InputField from '../Signup/InputField';
import SignupButton from '../Signup/SignupButton';
import toast from 'react-hot-toast';

interface User {
  name: string;
  phone_no: string;
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const currentUser = localStorage.getItem('currentUser');
  const user: User | null = currentUser ? JSON.parse(currentUser) : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      if (value === user?.email) setEmailError('');
      else setEmailError('Invalid your email');
    }
    if (name === 'password') {
      setPassword(value);
      if (value === user?.password) setPasswordError('');
      else setPasswordError('Invalid your password.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (email === user?.email && password === user.password) {
        toast.success('Login successfully.');
        setTimeout(() => navigate('/'), 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error('Login failed unexpectly.');
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-200 via-gray-100 to-white">
      <div className="grid w-[90%] py-5 sm:w-[50%] lg:w-[35%] bg-white rounded-lg shadow-lg">
        <div className="col-span-12 w-full lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl mb-10 font-semibold text-center text-gray-800">
              Login your account
            </h2>
            <InputField
              id="email"
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="someone1132@gmail.com"
              error={emailError}
              onChange={handleInputChange}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              placeholder="@Passw0rd11"
              error={passwordError}
              onChange={handleInputChange}
            />
            <br />
            <button className="float-right -mb-2 transition-all duration-75 hover:underline">
              Fortgot password?
            </button>
            <SignupButton>Sign in</SignupButton>
            <div className="text-center text-gray-600 space-y-2">
              <p>
                Don't you have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
              <p>Or login with your Google account</p>
            </div>
          </form>

          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default Signin;
