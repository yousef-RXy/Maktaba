import LoanHistory from '../components/profile/LoanHistory.jsx';
import ProfileInfo from '../components/profile/ProfileInfo.jsx';

export function meta({}) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function profile() {
  return (
    <div className="container mx-auto pt-4 px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileInfo />
        <LoanHistory />
      </div>
    </div>
  );
}
