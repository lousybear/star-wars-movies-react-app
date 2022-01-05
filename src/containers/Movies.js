import { useQuery, gql } from "@apollo/client";
import Movie from "../components/Movie";
import React from "react";

const GET_MOVIES = gql`
  query {
    movies {
      _id
      name
      genre
      year
      image
    }
  }
`;

export default function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops... Something Went Wrong</p>;
  return (
    <div className="movies">
      {data.movies.map((movie) => {
        return (
          <Movie
            key={movie._id}
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
