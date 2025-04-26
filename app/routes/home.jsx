import BooksSection from '../components/home/BooksSection';
import Header from '../components/home/Header';

export function meta({}) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <BooksSection />
    </>
  );
}
