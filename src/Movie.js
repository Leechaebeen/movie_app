import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"; 

// 컴포넌트가 state 가 필요없을 경우에는 class component 가 될 필요가 없다.
function Movie({year, title, summary, poster})
{
    return (
        <div class="movie">
                <img src={poster} alt={title}></img>
            <div class="movie_data">
                <h3 class="movie__title">{title}</h3>
                <h5 calss="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = 
{
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;