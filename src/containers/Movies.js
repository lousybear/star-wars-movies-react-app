import React, { Component } from "react";
import Movie from "../components/Movie";

export default class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Episode IV: A New Hope",
        genre: "Sci-Fi",
        year: 1977,
        image: "https://rb.gy/xc91wj",
      },
      {
        id: 2,
        name: "Episode V: The Empire Strikes Back",
        genre: "Sci-Fi",
        year: 1980,
        image: "https://rb.gy/sw9mie",
      },
      {
        id: 3,
        name: "Episode VI: Return of the Jedi",
        genre: "Sci-Fi",
        year: 1983,
        image: "https://rb.gy/gnihp6",
      },
      {
        id: 4,
        name: "Star Wars: The Last Jedi",
        genre: "Sci-Fi",
        year: 2019,
        image: "https://rb.gy/eux2k7",
      },
    ],
  };
  render() {
    return (
      <div className="movies">
        {this.state.movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              year={movie.year}
              image={movie.image}
            />
          );
        })}
      </div>
    );
  }
}
