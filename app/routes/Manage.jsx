import BooksTable from '../components/manage/BooksTable';
import ManageBooksForm from '../components/manage/ManageBooksForm';

export function meta({}) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <ManageBooksForm />
      <BooksTable />
    </>
  );
}
