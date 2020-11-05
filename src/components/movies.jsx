import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  deleteHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>there are no movies to show </p>;
    return (
      <React.Fragment>
        <p>There are {count} movies </p>
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteHandler(movie)}
                    type="button"
                    class="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
