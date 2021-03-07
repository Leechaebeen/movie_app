import PropTypes from "prop-types";
import "./Movie.css";

// 컴포넌트가 state 가 필요없을 경우에는 class component 가 될 필요가 없다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie_data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie__genres">
          { genres && genres.map( (genre, index) => (
            <li key={index} className="genres_genre">{genre}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
