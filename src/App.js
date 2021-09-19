import React, { useState } from 'react';
import MovieList from './components/MovieList';


const App = () => {

  /*const [filter, setFilter] = useState("");
  
  const handleFilter = (filter) =>{
    setFilter(filter.target.value);
  }*/

  // handleFilter={handleFilter} filter={filter}

  return (
    <div>
      <MovieList/>
    </div>
  );
}

export default App;
