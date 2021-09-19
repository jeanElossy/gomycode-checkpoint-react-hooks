import React from 'react';
import ReactPlayer from "react-player";


const MovieCard = ({film}) => {
  
  return (
    <>
      <div className="col-12 box position-relative" style={{}}>
        <ReactPlayer 
          url={film.urlFilm}
          controls={true}
          poster={film.urlPoster}
          muted={true}
          className="video w-100 h-100"
          showPreview={false}
        />
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          {film.increment === 0 ? 
            <span>{film.increment}/5</span> : <span>{film.rating}/5</span>
          }
        </div>
      </div>
    </>
  );
}

export default MovieCard;