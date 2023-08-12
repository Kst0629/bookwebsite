import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Image from 'next/image'
import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
import UpdateBookInfo from './components/UpdateBookInfo';

export default function Home() {
  return (
    <div>
      <Routes>
          <Route path='/' element = {<ShowBookList/> } />
          <Route path='/create-book' element = {<CreateBook/> } />
          <Route path='/' element = {<UpdateBookInfo/> } />
          <Route path='/' element = {<ShowBookDetails/> } />
      </Routes>
    </div>
  )
}
