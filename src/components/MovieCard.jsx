import React from 'react';
import ReactPlayer from "react-player";


const MovieCard = ({film}) => {
  
  return (
    <>
      <div className="col-12 col-md-6 box position-relative">
        <div className="overlay d-none">
          <h1 className="h5">{film.title}</h1> 
          <div className="description">{film.description}</div>
        </div>
        <ReactPlayer 
          url={film.urlFilm}
          controls={true}
          poster={film.urlPoster}
          muted={true}
          className="video w-100 h-100 rounded"
        />
      </div>
    </>
  );
}

export default MovieCard;