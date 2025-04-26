// import axios from 'axios';
// import { redirect } from 'react-router';
import AuthForm from '../components/auth/AuthForm';
// import {
//   hasMinLength,
//   isEqualsToOtherValue,
//   isNotEmpty,
// } from '../util/validation';

export default function AuthenticationPage() {
  return <AuthForm />;
}

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get('mode') || 'login';

//   if (mode !== 'login' && mode !== 'signup') {
//     throw json({ message: 'Unsupported mode.' }, { status: 422 });
//   }

//   const data = await request.formData();
//   const email = data.get('email');
//   const password = data.get('password');
//   if (!isNotEmpty(email))
//     return json({ message: 'email is empty.' }, { status: 500 });
//   if (!hasMinLength(password, 6))
//     return json({ message: 'Password is Short.' }, { status: 500 });
//   if (mode === 'signup') {
//     const passConfirm = data.get('password-confirmation');
//     if (!isEqualsToOtherValue(password, passConfirm))
//       return json(
//         { message: 'The Password and the Password-confirmation is not equal.' },
//         { status: 500 }
//       );
//   }

//   const authData = {
//     email,
//     password,
//   };

//   const res = await axios.post(`http://localhost:3001/auth/${mode}`, authData);

//   if (res.data.status === 422 || res.data.status === 401) {
//     console.log(res.data);
//     return res.data;
//   }

//   const resOK = res && res.data.status === 200 && res.statusText === 'OK';

//   if (!resOK) {
//     console.log(res.data);
//     throw json({ message: 'Could not authenticate user.' }, { status: 500 });
//   }
//   const _id = res.data._id;

//   const initUser = {
//     _id,
//     points: 0,
//     subjects: {},
//     totalHours: 0,
//     totalGpa: 0,
//     isAdmin: false,
//   };
//   mode === 'login' ? getUser(_id) : updateUser(initUser);

//   localStorage.setItem('user', JSON.stringify(initUser));

//   return redirect(mode === 'login' ? '/' : '/userdata');
// }
