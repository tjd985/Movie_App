import React from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
  console.log(movie);

  return (
    <div>
      <h1 className={styles.title}>Moive App</h1>
      {loading ? (
        <span className={styles.loading}>loading...</span>
      ) : (
        <div>
          <p className={styles.explane}>
            only shows movies with a rating of 9 or higher.
          </p>
          <div className={styles.inner}>
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
        </div>
      )}
    </div>
  );
}

export default Home;
