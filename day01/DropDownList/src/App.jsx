import { useState } from 'react'
import './App.css'

function App() {
  const [country, setCountry] = useState(0);

  const countries = [
    { name: 'India', value: 'IN', cities: [
      'Delhi',
      'Mumbai'
    ]},
    { name: 'Pak', value: 'PK', cities: [
      'Lahore',
      'Karachi'
    ]},
    { name: 'Bangladesh', value: 'BG', cities: [
      'Dhaka',
      'Chittagong'
    ]},
  ];

  return (
    <div>
      {/* first */}
      <select
        value={country}
        onChange={(e) => {
          // console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {
          countries.map((item,index) => {
            return <option value={index}>{item.name}</option>
          })
        }
      </select>

      {/* second */}
      <select
        value={country}
      >
        {
          countries[country].cities.map((item,index) => {
            return <option value={index}>{item}</option>
          })
        }
      </select>
    </div>
  )
}

export default App
