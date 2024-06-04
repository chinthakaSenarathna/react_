// import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
        {/* <TextInputWithFocusButton /> */}
      </div>
    </div>
  )
}

export default App
