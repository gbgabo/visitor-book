import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 

export default function AttendeeList() {
  const [registries, setRegistries] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // GET request using fetch inside useEffect React hook
    const response = await fetch('http://localhost:3001/api/registries');
    const data = await response.json();
    setRegistries(data.docs);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }

  return(
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {registries.map(registry => (
          <tr key={registry.id}>
            <td>{registry._id}</td>
            <td key={registry._id}>{registry.email}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
    <Link to='/'>Home</Link>
    </div>
  )

}