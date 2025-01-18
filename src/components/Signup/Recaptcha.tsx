import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
  onChange: (value: string | null) => void;
  value: string | null;
  error: string | null;
}

const Recaptcha: React.FC<Props> = ({ onChange, value, error }) => (
  <div className="flex flex-col items-center justify-center">
    <ReCAPTCHA
      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      onChange={onChange}
    />
    {!value && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Recaptcha;
