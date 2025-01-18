import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

interface Props {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  error,
  onChange,
}) => {
  const [hidePassword, togglePassword] = useState<string>('password');
  const location = useLocation();
  return (
    <div className="space-y-2 relative">
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type === 'email' || type === 'text' ? type : hidePassword}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        required
      />
      {placeholder === '@Passw0rd11' && location.pathname === '/signup' && (
        <button
          onClick={() =>
            togglePassword(hidePassword === 'password' ? 'text' : 'password')
          }
          className="absolute top-[39px] right-4"
        >
          {hidePassword === 'password' && (
            <EyeIcon className="size-5 text-gray-500" />
          )}
          {hidePassword === 'text' && (
            <EyeSlashIcon className="size-5 text-gray-500" />
          )}
        </button>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
