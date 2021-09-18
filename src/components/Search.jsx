import React from 'react';


const Search = () => {


  return (
    <div>
      <form className="form-group">
        <input type="text" name="nom" id="nom" placeholder="Recherche" className="form-control px-5 py-3 bg-transparent text-white" />
        <div className="text-center mt-3">
          <button className="btn btn-outline-success">Rechercher</button>
        </div>
      </form>
    </div>
  );
}

export default Search;