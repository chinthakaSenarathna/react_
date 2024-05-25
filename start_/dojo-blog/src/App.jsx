import './App.css'

function App() {
  const title = "Welcom to the new blog";

  return (
    <div className="App">
      <div className="Content">
        <h1 className="Title">App Component</h1>
        {/* inside the '{}' react know this is the variable */}
        <p className="SubTitle">{ title }</p>
      </div>
    </div>
  )
}

export default App
