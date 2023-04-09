import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Details() {
  const id = useParams();

  let [loading, setLoading] = useState(true);
  let [movieInfo, setMovieInfo] = useState([]);

  const getData = async function () {
    const movieData = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id.eyeD}`
    );
    const json = await movieData.json();
    console.log(json.data.movie);
    setMovieInfo(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.inner}>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div className={styles.card}>
          <img src={movieInfo.medium_cover_image} />
          <div className={styles.right}>
            <h1>{movieInfo.title_long}</h1>
            <span>Rating: {movieInfo.rating}</span>
            <ul>
              {Object.keys(movieInfo).includes("genres") === true
                ? movieInfo.genres.map((index, i) => <li key={i}>{index}</li>)
                : null}
            </ul>
            <p>
              {movieInfo.description_full.length > 1900
                ? `${movieInfo.description_full.slice(0, 1900)}...`
                : movieInfo.description_full}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
