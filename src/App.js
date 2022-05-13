import React, { Component } from "react";
import axios from "axios";
import "./App.css";

//<rce> (React Class Component Export)
export class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

//https://yts-proxy.now.sh/list_movies.json ->노마드API
