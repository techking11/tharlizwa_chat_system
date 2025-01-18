import { FormData } from '../types/signupFormData';

class FormValidator {
  static validateName(name: string): string {
    if (name.length < 3 || name.length > 20) {
      return 'Name must be between 3 and 20 characters.';
    }
    return '';
  }

  static validatePhoneNo(phone: string): string {
    const phoneRegex = /^\+[1-9]\d{1,14}$/; // E.164 format
    if (!phoneRegex.test(phone)) {
      return 'Invalid phone number format.';
    }
    return '';
  }

  static validateEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address.';
    }
    return '';
  }

  static validatePassword(password: string): string {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must be at least 6 characters long, with uppercase, lowercase, number, and special character.';
    }
    return '';
  }

  static validateProfile(file: File | null): string {
    if (!file) {
      return 'Profile image is required.';
    }
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return 'Only JPEG and PNG images are allowed.';
    }
    return '';
  }

  static validateRecaptcha(value: string | null) {
    if (!value) {
      return 'Recaptcha is required.';
    }
    return '';
  }

  static validateForm(formData: FormData): Record<keyof FormData, string> {
    return {
      name: this.validateName(formData.name),
      phone_no: this.validatePhoneNo(formData.phone_no),
      email: this.validateEmail(formData.email),
      password: this.validatePassword(formData.password),
      profile: this.validateProfile(formData.profile),
      captcha: this.validateRecaptcha(formData.captcha),
    };
  }
}

export default FormValidator;
