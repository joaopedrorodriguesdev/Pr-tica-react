import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Criar from './Criar.jsx';
import NotFound from './NotFound.jsx';
import NavBar from './NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/criar' element={<Criar/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
