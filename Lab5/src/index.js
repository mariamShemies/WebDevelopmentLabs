import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function MovieItem(props) {
  return (
    <div className="movie-item">
      <h3>{props.title}</h3>

      <div>
        <span>Rating: </span>
        {Array(props.rating)
          .fill("⭐")
          .map((star, i) => (
            <span key={i}>{star}</span>
          ))}
      </div>

      <p>{props.comment}</p>

      <button onClick={() => props.onRemove(props.id)}>Remove</button>
    </div>
  );
}

function App() {
  const [movies, setMovies] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  function addMovie() {
    if (title.trim() === "") return;
    const newMovie = {
      id: Date.now(),
      title: title,
      rating: rating,
      comment: comment,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setRating(0);
    setComment("");
  }

  function removeMovie(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  return (
    <div className="App">
      <h1>Movies Watch List</h1>

      <input
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        type="number"
        min="0"
        max="5"
        placeholder="Rating (0-5)"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <br />

      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />

      <button onClick={addMovie}>Add Movie</button>

      <div className="list">
        {movies.length === 0 && <p>No movies added yet</p>}
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            comment={movie.comment}
            onRemove={removeMovie}
          />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);