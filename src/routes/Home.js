import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"; 

// react 는 자동으로 모든 class component 의 render() 를 실행한다.
// render() 는 React.Component 의 메소드를 오버라이딩 하는 것
class Home extends React.Component {
  // setState() 를 사용할 때 state 안에 default 값을 선언할 필요는 없다.
  state = {
    isLoading: true,
    movies: [],
  };

  // 비동기로 json 데이터 가져오는 메소드
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
     //console.log(movies.genres);
    //기존 console.log(movies.data.data.movies);

    // 왼쪽은 state 의 movies 이고 오른쪽은 axios 에서 온 movies
    //this.setState({movies : movies})

    // 하지만 이렇게 써도 알아듣는다. state의 이름과 받아오는 데이터의 객체 이름인 movies가 같기 때문
    this.setState({ movies, isLoading: false });
  };

  // 렌더링이 되면 가장 먼저 호출되는 메소드
  componentDidMount() {
    this.getMovies();
  }

  // 렌더링
  render() {
    // state 의 값
    const { movies, isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
