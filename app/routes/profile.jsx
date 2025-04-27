import { redirect } from 'react-router';

import LoanHistory from '../components/profile/LoanHistory.jsx';
import ProfileInfo from '../components/profile/ProfileInfo.jsx';

export default function Profile() {
  return (
    <div className="container mx-auto pt-4 px-4 md:px-24">
      <div className="grid grid-cols-1 grid-rows-2 justify-center md:grid-cols-3 md:grid-rows-1 md:gap-6">
        <ProfileInfo />
        <LoanHistory />
      </div>
    </div>
  );
}

export async function clientLoader() {
  const id = localStorage.getItem('id');
  if (!id) {
    throw redirect('/');
  }
  const JWT = localStorage.getItem('token');

  const loansRes = await fetch(
    `${import.meta.env.VITE_URL}/Loans/GetAllByUserId?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    }
  );

  const userRes = await fetch(
    `${import.meta.env.VITE_URL}/Account/GetById?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    }
  );

  const resData = {};
  resData.loans = await loansRes.json();
  resData.user = await userRes.json();

  return resData;
}
