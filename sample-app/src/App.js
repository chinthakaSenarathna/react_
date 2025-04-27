import { createContext, useEffect, useRef, useState } from "react";
import ComOne from "./components/ComOne";

export const UserContext = createContext()

function App() {
  const [users, setUsers] = useState([]);
  const [name,setName] = useState('')

  const countRef = useRef(0)
  const colorRef = useRef()

  const fetchData = async () => {
    try {
      const existUsers = localStorage.getItem('users')

      if(existUsers){
        setUsers(JSON.parse(existUsers))
        return
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const fetchUsers = await response.json();
      localStorage.setItem('users',JSON.stringify(fetchUsers))
      setUsers(fetchUsers);
      console.log('hey')
    } catch (error) {
      console.log("Something went wrong: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    countRef.current += 1
    colorRef.current.style.color = "red"
  })

  return (
    <UserContext.Provider value={users}>
      <div className="App">

        {
          users[0] && <ComOne name={users[0].name} username={users[0].username} email={users[0].email}/>
        }

        <div className="m-2">
          <p>My name is {name}</p>
          <p ref={colorRef}>Count {countRef.current}</p>
          <input type="text" placeholder="enter your name..."
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <table style={{ border: "1px solid black", borderCollapse: "collapse", textAlign: "center", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>ID</th>
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>Username</th>
              <th style={{ border: "1px solid black" }}>Email</th>
              <th style={{ border: "1px solid black" }}>Street</th>
              <th style={{ border: "1px solid black" }}>Suite</th>
              <th style={{ border: "1px solid black" }}>City</th>
              <th style={{ border: "1px solid black" }}>Zipcode</th>
              <th style={{ border: "1px solid black" }}>Lat</th>
              <th style={{ border: "1px solid black" }}>Lng</th>
              <th style={{ border: "1px solid black" }}>Phone</th>
              <th style={{ border: "1px solid black" }}>Website</th>
              <th style={{ border: "1px solid black" }}>Company Name</th>
              <th style={{ border: "1px solid black" }}>Catch Phrase</th>
              <th style={{ border: "1px solid black" }}>BS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid black" }}>{user.id}</td>
                <td style={{ border: "1px solid black" }}>{user.name}</td>
                <td style={{ border: "1px solid black" }}>{user.username}</td>
                <td style={{ border: "1px solid black" }}>{user.email}</td>
                <td style={{ border: "1px solid black" }}>{user.address.street}</td>
                <td style={{ border: "1px solid black" }}>{user.address.suite}</td>
                <td style={{ border: "1px solid black" }}>{user.address.city}</td>
                <td style={{ border: "1px solid black" }}>{user.address.zipcode}</td>
                <td style={{ border: "1px solid black" }}>{user.address.geo.lat}</td>
                <td style={{ border: "1px solid black" }}>{user.address.geo.lng}</td>
                <td style={{ border: "1px solid black" }}>{user.phone}</td>
                <td style={{ border: "1px solid black" }}>{user.website}</td>
                <td style={{ border: "1px solid black" }}>{user.company.name}</td>
                <td style={{ border: "1px solid black" }}>{user.company.catchPhrase}</td>
                <td style={{ border: "1px solid black" }}>{user.company.bs}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </UserContext.Provider>
  );
}

export default App;
