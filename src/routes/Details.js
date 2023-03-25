import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <img src={movieInfo.medium_cover_image} />
          <h1>{movieInfo.title_long}</h1>
          <span>Rating: {movieInfo.rating}</span>
          <ul>
            {Object.keys(movieInfo).includes("genres") === true
              ? movieInfo.genres.map((index, i) => <li key={i}>{index}</li>)
              : null}
          </ul>
          <p>
            summary: <br />
            {movieInfo.description_full}
          </p>
        </div>
      )}
    </div>
  );
}

export default Details;
