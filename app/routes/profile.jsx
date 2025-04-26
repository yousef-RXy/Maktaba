import LoanHistory from '../components/profile/LoanHistory.jsx';
import ProfileInfo from '../components/profile/ProfileInfo.jsx';

export function meta({}) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Profile() {
  return (
    <div className="container mx-auto pt-4 px-4 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileInfo />
        <LoanHistory />
      </div>
    </div>
  );
}
