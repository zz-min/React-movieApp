import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Movie from "./Movie";

//<rce> (React Class Component Export)
export class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //this.setState({ movies: movies, isLoading: false });
    //하나는 setState의movies,하나는 axios의 movies
    this.setState({ movies, isLoading: false }); //movies는 축약으로 씀
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader__text">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

//https://yts-proxy.now.sh/list_movies.json ->노마드API
