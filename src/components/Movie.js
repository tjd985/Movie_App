import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ poster, title, genres, id, summary }) {
  return (
    <div className={styles.card}>
      <Link to={`/details/${id}`}>
        <img src={poster} />
      </Link>
      <div className={styles.right}>
        <h3>
          <Link to={`/details/${id}`} className={styles.title}>
            {title}
          </Link>
        </h3>
        <ul className={styles.genres}>
          {genres.map((index, i) => (
            <li key={i} className={styles.genres_detail}>
              {index}
            </li>
          ))}
        </ul>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};

export default Movie;
