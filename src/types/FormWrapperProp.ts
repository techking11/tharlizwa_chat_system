export interface Props {
  formData: {
    name: string;
    phone_no: string;
    email: string;
    password: string;
    captcha: string | null;
  };
  errors: {
    name: string;
    phone_no: string;
    email: string;
    password: string;
    captcha: string | null;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCaptchaChange: (value: string | null) => void;
  captcha: string | null;
}
