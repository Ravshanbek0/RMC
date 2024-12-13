import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
