import React, { useState } from 'react';
import FormValidator from '../../validations/FormValidator';
import { FormData } from '../../types/signupFormData';
import FormWrapper from './FormWrapper';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const handleCaptchaChange = (value: string | null) => setCaptchaValue(value);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone_no: '',
    email: '',
    password: '',
    profile: null,
    captcha: null,
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    name: '',
    phone_no: '',
    email: '',
    password: '',
    profile: '',
    captcha: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    const updatedValue = name === 'profile' ? files?.[0] || null : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    const validationErrors = FormValidator.validateForm(formData);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((err) => err);
    if (!hasErrors) {
      console.log('Form data submitted:', formData);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (
        formData.name.trim() !== '' &&
        formData.phone_no.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.password.trim() !== '' &&
        captchaValue !== null
      ) {
        localStorage.setItem('currentUser', JSON.stringify(formData));
        toast.success('Account created successfully.');
        navigate('/');
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      toast.error('Failed to create account. Please try again.');
    }
  };

  return (
    <FormWrapper
      formData={formData}
      errors={errors}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      handleCaptchaChange={handleCaptchaChange}
      captcha={captchaValue}
    />
  );
};

export default Signup;
