import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './companet/Header';
import Main from './companet/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Params from './companet/Params';

function App() {
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        {/* <Route path='/item/:id' element={<Params/>}/> */}
      </Routes>
    </BrowserRouter>
  </Fragment>
}

export default App;
