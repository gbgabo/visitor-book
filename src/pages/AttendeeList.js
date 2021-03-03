import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 

export default function AttendeeList() {
  const [registries, setRegistries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  const totalPages = async () => {
    const response = await fetch(`/api/registries?page=1`);
    const data = await response.json();
    return data.pages
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // console.log(`finished: ${finished}`);
    
    console.log(`Page: ${page}`)
    const loadData = async () => {
      // GET request using fetch inside useEffect React hook
      setLoading(true);
      
      if (page > totalPages){
        setFinished(true);
      } else {
        const response = await fetch(`/api/registries?page=${page}`);
        const data = await response.json();
        setRegistries(prev => [...prev, ...data.docs]);
      }
      setLoading(false)
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }
    loadData();
  }, [page]);
  
  const handleScroll = event => {
    // const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    // console.log(`scrollTop: ${document.documentElement.scrollTop}`);
    // console.log(`innerHeight: ${window.innerHeight}`);
    // console.log(`offsetHeight: ${document.documentElement.offsetHeight}`);

    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      if(!finished){
        setPage(prev => prev + 1);
        // console.log("Teste")
      }
    }
  }

  return(
    <div className='table' onScroll={handleScroll}>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {registries.map(registry => (
          <tr key={registry._id}>
            <td>{registry._id}</td>
            <td key={registry._id}>{registry.email}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
    {loading && <p>On Loading...</p>}
    {finished && <p>End of list</p>}
    <Link to='/'>Home</Link>
    </div>
  )

}