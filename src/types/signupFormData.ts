export interface FormData {
  name: string;
  phone_no: string;
  email: string;
  password: string;
  profile: File | null;
  captcha: string | null;
}
