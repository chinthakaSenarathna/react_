// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import Create from './components/Create';

function App() {

  return (
    <Router>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
