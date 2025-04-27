import { redirect } from 'react-router';
import AuthForm from '../components/auth/AuthForm';
import {
  hasMinLength,
  isEqualsToOtherValue,
  isNotEmpty,
  isValidPhoneNumber,
} from '../util/validation';
import { decodeJWT, logout, performHourlyTask } from '../util/Tokens';

export default function AuthenticationPage() {
  return <AuthForm />;
}

export async function clientAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    return { message: ['Unsupported mode.'], status: 422 };
  }

  let errorMessages = [];

  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  if (!isNotEmpty(email)) errorMessages.push('email is not Valid.');
  if (!hasMinLength(password, 8)) errorMessages.push('Password is Short.');

  let authData = {
    email,
    password,
  };

  if (mode === 'signup') {
    const passConfirm = data.get('password-confirmation');
    if (!isEqualsToOtherValue(password, passConfirm))
      errorMessages.push(
        'The Password and the Password-confirmation is not equal.'
      );

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const user_name = data.get('user_name');
    const phoneNumber = data.get('phoneNumber');

    if (!hasMinLength(firstName, 3)) errorMessages.push('firstName is Short.');
    if (!hasMinLength(lastName, 3)) errorMessages.push('lastName is Short.');
    if (!hasMinLength(user_name, 3)) errorMessages.push('user_name is Short.');
    if (!isValidPhoneNumber(phoneNumber) || phoneNumber.length != 11)
      errorMessages.push('phoneNumber is not Valid.');

    const registerData = {
      firstName,
      lastName,
      user_name,
      phoneNumber,
    };

    authData = { ...authData, ...registerData };
  }

  if (errorMessages.length != 0) {
    return { messages: errorMessages, status: 400 };
  }

  const res = await fetch(
    `${import.meta.env.VITE_URL}/Account/${
      mode === 'signup' ? 'Register' : 'Login'
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    }
  );

  errorMessages = ['Failed to authenticate user.'];

  if (!res.ok) {
    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const errorData = await res.json();
      if (errorData.errors) {
        errorMessages = Object.values(errorData.errors).flat();
      } else if (errorData.title) {
        errorMessages = [errorData.title];
      }
    } else {
      let text = await res.text();
      try {
        text = JSON.parse(text);
        errorMessages = Object.values(text?.errors).flat();
      } catch (error) {
        errorMessages = text.split(',');
      }
    }

    return {
      messages: errorMessages,
      status: res.status,
    };
  }

  const resData = await res.json();
  decodeJWT(resData.token, resData.refreshToken);

  throw redirect('/');
}
