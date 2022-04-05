import React, {useState, useEffect} from 'react'

function Table() {

 const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [title, setTittle] = useState("");


  const onSearch = () => {
    // debugger
    const filterTable = movies.filter(o => o.title  === (title === "" ? o.title : title));
    setMovies(filterTable);
     } 

     useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(data => {
          setMovies(data)
          setSearch(data)
        },
       ) }, []);

  return (
            <div className='container'>
    <div className="mb-3 divs ">
  <label className="form-label">Search</label>
    <input type="search" className="form-control mb-3" onChange={(e) => setTittle(e.target.value)} />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => onSearch()}>Search</button>
  </div>
    <table class="table divs">
    <thead>
    <tr>
      <th scope="col">Movies</th>
      <th scope="col">Rating</th>
      <th scope="col">Duration</th>
    </tr>
  </thead>
  <tbody>{
  search && search.length > 0 
 ? search.map((movie, key) => (
    <tr key={key}>
       <td >{movie.title}</td>
       <td >{movie.rating}</td>
      <td >{movie.duration}</td> 
    </tr>
    )) : "No movies found"}
  </tbody>
    </table>  
    </div>
  )
}

export default Table