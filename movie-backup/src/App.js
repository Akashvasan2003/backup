import React from "react";
import MovieList from "./MovieList";
import "./styles.css";

const topPicks = [
  {
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    stars: 5,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: "PG-13",
    duration: "169 min",
    image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    stars: 5,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: "PG-13",
    duration: "152 min",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    stars: 4,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: "R",
    duration: "136 min",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
    stars: 4,
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: "R",
    duration: "142 min",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    stars: 5,
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: "R",
    duration: "139 min",
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    stars: 5,
  },
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    rating: "R",
    duration: "180 min",
    image: "https://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
    stars: 3,
  },
  
  
  
  
];

const latestReleases = [
  {
    title: "Dune: Part Two",
    year: 2024,
    rating: "PG-13",
    duration: "165 min",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    stars: 4,
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: "PG-13",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg",
    stars: 5,
  },
  {
    title: "Kung fu panda 4 ",
    year: 2024,
    rating: "R",
    duration: "127 min",
    image: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    stars: 3,
  },
  
  {
    title: "The Batman",
    year: 2022,
    rating: "PG-13",
    duration: "176 min",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    stars: 5,
  },
  {
  title: "The Shawshank Redemption",
  year: 1994,
  rating: "R",
  duration: "142 min",
  image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  stars: 5,
},
{
  title: "Kingdom of the Planet of the Apes",
  year: 2024,
  rating: "PG-13",
  duration: "TBD",
  image: "https://image.tmdb.org/t/p/w500/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
  stars: 4,
},
{
  title: "Ghostbusters: Frozen Empire",
  year: 2024,
  rating: "PG-13",
  duration: "TBD",
  image: "https://image.tmdb.org/t/p/w500/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
  stars: 5,
}





];

const App = () => {
  return (
    <div className="container">
      <h1>Movie Recommendations</h1>

      <h2>Top Picks</h2>
      <MovieList movies={topPicks} />

      <h2>Latest Releases</h2>
      <MovieList movies={latestReleases} />
    </div>
  );
};

export default App;
