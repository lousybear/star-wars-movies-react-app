import { gql, useMutation } from "@apollo/client";
import React from "react";

const ADD_MOVIE = gql`
  mutation addMovie(
    $name: String!
    $genre: String!
    $year: String!
    $image: String!
  ) {
    addMovie(name: $name, genre: $genre, year: $year, image: $image) {
      name
      genre
      year
      image
    }
  }
`;

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

export default function AddMovie() {
  let name, genre, year;
  const [addMovie] = useMutation(ADD_MOVIE);
  return (
    <div className="addMovie" id="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie({
            variables: {
              name: name.value,
              genre: genre.value,
              year: year.value,
              image: "https://rb.gy/eux2k7",
            },
            refetchQueries: [{ query: GET_MOVIES }],
          });
        }}
      >
        <label>Name</label>
        <input ref={(val) => (name = val)} type="text" required />
        <label>Genre</label>
        <input ref={(val) => (genre = val)} type="text" required />
        <label>Year</label>
        <input
          ref={(val) => (year = val)}
          type="text"
          placeholder="{optional}"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
