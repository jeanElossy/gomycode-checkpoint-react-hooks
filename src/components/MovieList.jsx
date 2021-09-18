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
        title: "PRISON BREAK",
        description: "SEASON 6 ep 1",
        videoUrl: "https://youtu.be/WiiUWzs0Uow",
        posterURL: "https://sortie.news/wp-content/uploads/2020/09/maxresdefault-37.jpg",
        rating: 0
      },
      {
        id: 2,
        title: "24 heures chrono",
        description: "Saison 9 episode 1 en français",
        videoUrl: "https://youtu.be/ySnnGNxL8Jg",
        posterURL: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/25/4f272919dc33902ce1be2e3694a26d92074cbc13.png",
        rating: 0
      },
      {
        id: 3,
        title: "Evil Cult & Jet Li",
        description: "Film complet en français",
        videoUrl: "https://youtu.be/rFdktk41OMg",
        posterURL: "https://lobservateur.info/uploads/imported_images/uploads/2018/05/Jet-Li.jpg",
        rating: 0
      },
      {
        id: 4,
        title: "Marvel’s Spider-Man 2",
        description: "Reveal Trailer",
        videoUrl: "https://youtu.be/sAKe9OI3Cog",
        posterURL: "https://www.journaldugeek.com/content/uploads/2019/05/spiderman.jpg",
        rating: 0
      },
      {
        id: 5,
        title: "LE CLUB DES MILLIARDAIRES",
        description: "FILM NIGERIAN EN FRANCAIS FILM AFRICAINE",
        videoUrl: "https://youtu.be/B-CqNvg5auE",
        posterURL: "https://sodasandpopcorn.ng/wp-content/uploads/2021/03/Billionaires-Club-1.jpg",
        rating: 0
      },
      {
        id: 6,
        title: "Sniper Ghost Shooter",
        description: "Films d'action drama americain complet en français film 2016",
        videoUrl: "https://youtu.be/0Q5gx4EQvG0",
        posterURL: "https://fr.web.img5.acsta.net/r_1920_1080/pictures/16/06/02/16/09/189675.jpg",
        rating: 0
      },
      {
        id: 7,
        title: "Hotel Rawanda",
        description: "Role of Peace Keeping forces of UN",
        videoUrl: "https://youtu.be/tbjdbsvMz2A",
        posterURL: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop455/public/medias/2008/02/media_25457/M5808.jpg?itok=KNuk1aX0",
        rating: 0
      },
      {
        id: 8,
        title: "Terminator 3",
        description: "Open Matte film robotique",
        videoUrl: "https://youtu.be/hSZkU9Yyp0w",
        posterURL: "https://imgr.cineserie.com/2019/03/terminator-6-on-connait-le-titre-officiel-2.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1",
        rating: 0
      }
    ]
  );

  return (
    <div>
      <NavBar />
      <AddCard />
      <div className="container">
        <div className="row">
          {films.map((film) => (
            <MovieCard film={film} />
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default MovieList;
