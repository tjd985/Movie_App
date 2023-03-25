import React from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [movie, setMovie] = React.useState([]);

  const getMovies = async function () {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
    console.log(movie);
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Moive App</h1>
      <hr />
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          {movie.map((index) => (
            <Movie
              key={index.id}
              id={index.id}
              poster={index.medium_cover_image}
              title={index.title_long}
              genres={index.genres}
              summary={index.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
