import React from 'react';
import { Player } from "video-react";
//import ReactPlayer from 'react-player'

const MovieCard = ({film}) => {
  return (
    <>
      <div className="col-12 box position-relative">
        <Player 
          url={film.urlFilm}
          controls={true}
          poster={film.urlPoster}
          muted={true}
          className="video"
          BigPlayButton={true}
          width='100%'
          height='100%'
        />
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          {(film.increment > 0) ? 
            <span>{film.increment}/5</span> : <span>{film.rating}/5</span>
          }
        </div>
      </div>
    </>
  );
}

export default MovieCard;