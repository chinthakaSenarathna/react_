import './App.css'

function App() {
  const title = "Welcom to the new blog";
  const likes = 50;
  const arr = ['x','y','z'];
  const person = {
    name: 'chinthaka',
    age: 23
  };

  return (
    <div className="App">
      <div className="Content">
        <h1 className="Title">App Component</h1>
        {/* inside the '{}' react know this is the variable */}
        <h2 className="SubTitle">{ title }</h2>
        {/* like data type is 'number' but, but react render that as string */}
        <p className="Para01">Liked { likes } times</p>
        <p className="Para02">{ arr }</p>
        <p className="Para03">{ person }</p>
      </div>
    </div>
  )
}

export default App
