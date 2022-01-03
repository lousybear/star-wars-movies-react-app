import React from "react";

export default function AddMovie() {
  return (
    <div className="addMovie">
      <form>
        <label>Name</label>
        <input type="text" required />
        <label>Genre</label>
        <input type="text" required />
        <input type="text" placeholder="{optional}" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
