import BooksSection from '../components/home/BooksSection';
import Header from '../components/home/Header';
import { getAllBooks } from '../util/http';

export default function Home() {
  return (
    <>
      <Header />
      <BooksSection />
    </>
  );
}

export async function clientLoader() {
  return await getAllBooks();
}
