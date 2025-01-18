import React, { useState } from 'react';
import InputField from './InputField';
import SignupButton from './SignupButton';
import GoogleButton from './GoogleButton';
import ElementLoading from '../Loading/ElementLoading';
const Recaptcha = React.lazy(() => import('./Recaptcha'));
import { Props } from '../../types/FormWrapperProp';
import { Link } from 'react-router';

const FormWrapper: React.FC<Props> = ({
  formData,
  errors,
  handleSubmit,
  handleInputChange,
  handleCaptchaChange,
  captcha,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => setLoading(false), 5000);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-200 via-gray-100 to-white">
      <div className="grid w-[90%] sm:w-[50%] lg:w-[35%] bg-white rounded-lg shadow-lg">
        <div className="col-span-12 w-full p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Create your account
            </h2>
            <InputField
              id="name"
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="John Smith"
              error={errors.name}
              onChange={handleInputChange}
            />
            <InputField
              id="phone_no"
              label="Phone Number"
              type="text"
              name="phone_no"
              value={formData.phone_no}
              placeholder="+959876545332"
              error={errors.phone_no}
              onChange={handleInputChange}
            />
            <InputField
              id="email"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="someone1132@gmail.com"
              error={errors.email}
              onChange={handleInputChange}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="@Passw0rd11"
              error={errors.password}
              onChange={handleInputChange}
            />
            <div className="flex flex-col justify-center items-center">
              {loading ? (
                <ElementLoading />
              ) : (
                <Recaptcha
                  value={captcha}
                  error={errors.captcha}
                  onChange={handleCaptchaChange}
                />
              )}
            </div>
            <SignupButton>Sign up</SignupButton>
            <div className="text-center text-gray-600 space-y-2">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Sign in
                </Link>
              </p>
              <p>Or register with your Google account</p>
            </div>
          </form>

          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
