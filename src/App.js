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
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //this.setState({ movies: movies });
    //하나는 setState의movies,하나는 axios의 movies
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  id={movies.id}
                  year={movies.year}
                  title={movies.title}
                  summary={movies.summary}
                  poster={movies.description_full}
                />
              );
            })}
      </div>
    );
  }
}

export default App;

//https://yts-proxy.now.sh/list_movies.json ->노마드API
