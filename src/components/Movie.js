import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ poster, title, genres, summary, id }) {
  return (
    <div>
      <img src={poster} />
      <h3>
        <Link to={`/details/${id}`}>{title}</Link>
      </h3>
      <ul>
        {genres.map((index, i) => (
          <li key={i}>{index}</li>
        ))}
      </ul>
      <p>{summary}</p>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};

export default Movie;
