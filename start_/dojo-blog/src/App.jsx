import './App.css'

function App() {
  const title = "Welcom to the new blog";
  const likes = 50;
  const arr = ['x','y','z'];
  const person = {
    name: 'chinthaka',
    age: 23
  };

  const URL = 'http://www.google.com';

  return (
    <div className="App">
      <div className="Content">
        <h1 className="Title">App Component</h1>
        {/* inside the '{}' react know this is the variable */}
        <h2 className="SubTitle">{ title }</h2>
        {/* like data type is 'number' but, but react render that as string */}
        <p className="Para0">Liked { likes } times</p>
        <p className="Para0">{ arr }</p>
        {/* Wrrong */}
        {/* <p className="Para03">{ person }</p> */}

        <p className="Para0">{ 10 }</p>
        <p className="Para0">{ "Hello, Chinthaka" }</p>
        <p className="Para0">{ [1,2,3,4,5] }</p>
        <p className="Para0">{Math.random() * 100 }</p>

        <a href={ URL }>Google Site</a>
      </div>
    </div>
  )
}

export default App
