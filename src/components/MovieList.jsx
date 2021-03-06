import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import NavBar from './NavBar';
import AddCard from './AddCard';

const MovieList = () => {

  const [films, setFilms] = useState(
    [
      {
        id: 1,
        title: "Prison breack",
        description: "SEASON 6 ep 1",
        urlFilm: "https://youtu.be/WiiUWzs0Uow",
        urlPoster: "https://sortie.news/wp-content/uploads/2020/09/maxresdefault-37.jpg",
        rating: 2
      },
      {
        id: 2,
        title: "24h chrono",
        description: "Saison 9 episode 1 en français",
        urlFilm: "https://youtu.be/ySnnGNxL8Jg",
        urlPoster: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/25/4f272919dc33902ce1be2e3694a26d92074cbc13.png",
        rating: 1
      },
      {
        id: 3,
        title: "Cult Jet Li",
        description: "Film complet en français",
        urlFilm: "https://youtu.be/rFdktk41OMg",
        urlPoster: "https://lobservateur.info/uploads/imported_images/uploads/2018/05/Jet-Li.jpg",
        rating: 3
      },
      {
        id: 4,
        title: "Spider-Man 2",
        description: "Reveal Trailer",
        urlFilm: "https://youtu.be/sAKe9OI3Cog",
        urlPoster: "https://www.journaldugeek.com/content/uploads/2019/05/spiderman.jpg",
        rating: 2
      },
      {
        id: 5,
        title: "Les milliardaires",
        description: "FILM NIGERIAN EN FRANCAIS FILM AFRICAINE",
        urlFilm: "https://youtu.be/B-CqNvg5auE",
        urlPoster: "https://sodasandpopcorn.ng/wp-content/uploads/2021/03/Billionaires-Club-1.jpg",
        rating: 4
      },
      {
        id: 6,
        title: "Sniper",
        description: "Films d'action drama americain complet en français film 2016",
        urlFilm: "https://youtu.be/0Q5gx4EQvG0",
        urlPoster: "https://fr.web.img5.acsta.net/r_1920_1080/pictures/16/06/02/16/09/189675.jpg",
        rating: 5
      },
      {
        id: 7,
        title: "Hotel Rawanda",
        description: "Role of Peace Keeping forces of UN",
        urlFilm: "https://youtu.be/tbjdbsvMz2A",
        urlPoster: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop455/public/medias/2008/02/media_25457/M5808.jpg?itok=KNuk1aX0",
        rating: 3
      },
      {
        id: 8,
        title: "Terminator 3",
        description: "Open Matte film robotique",
        urlFilm: "https://youtu.be/hSZkU9Yyp0w",
        urlPoster: "https://imgr.cineserie.com/2019/03/terminator-6-on-connait-le-titre-officiel-2.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1",
        rating: 2
      }
    ]
  );

  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

  const [num, setNum] = useState(0);
  const handleRating = (e) =>{
    setNum(e.target.value);
  }
  console.log(num.toString());

  const handleAdd = (film) => {
    const newFilms = [...films];
    newFilms.push(film)

    setFilms(newFilms)
  }

  // useEffect(()=> {
  //   let newFilms = [...films];
  //   switch(filter) {
  //     case "title" : newFilms.filter((film) => film.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  //       break;
  //     case "rating" : newFilms.filter((film) => film.rating.toString().includes(filter.toString()));
  //       break;
  //     default : setFilms(newFilms);
  //   }
  //   setFilms(newFilms);
  // }, [filter]) 


  return (
    <div>
      <NavBar 
        search={handleSearch}
        searchRating={handleRating}
        // search={handleFilter}
      />
      <AddCard add={handleAdd} />
      <div className="container">
        <div className="row">
          {films
            .filter((film) => film.title.toLowerCase().includes(filter.toLocaleLowerCase()))
            .sort((a, b) => b.id - a.id)
            .map((film) => (
            <MovieCard film={film} key={film.id} />
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default MovieList;
