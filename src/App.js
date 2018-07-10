import React, { Component } from 'react';
import Movie from './components/Movies';
import Wrapper from './components/Wrapper';
import Title from './components/Title';


const url = 'http://localhost:8080/api';

class App extends Component {

  state = {
    movies: [],
    movieTitle: '',
    releaseDate: '',
    mpaaRating: '',
    directorName: '',
    studioName: '',
    userRating: ''
  }

  constructor(props) {
    super(props)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateDate = this.updateDate.bind(this)
    this.updateMpaa = this.updateMpaa.bind(this)
    this.updateDirector = this.updateDirector.bind(this)
    this.updateStudio = this.updateStudio.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.addMovie = this.addMovie.bind(this)
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    this.getMovies();
  }

  updateTitle(event) {
    this.setState({ movieTitle: event.target.value })
  }

  updateDate(event) {
    this.setState({ releaseDate: event.target.value })
  }

  updateMpaa(event) {
    this.setState({ mpaaRating: event.target.value })
  }

  updateDirector(event) {
    this.setState({ directorName: event.target.value })
  }

  updateStudio(event) {
    this.setState({ studioName: event.target.value })
  }

  updateUser(event) {
    this.setState({ userRating: event.target.value })
  }

  getMovies() {
    fetch(`${url}/movies`)
      .then(response => response.json())
      .then(movieResponseArray => {
        this.setState({
          movies: movieResponseArray
        })
      })
      .catch(error => console.log(`Error with fetch getKoalas: ${error} `));
  }

  addMovie() {

    const movie_data = {
      movieTitle: this.state.movieTitle,
      releaseDate: this.state.releaseDate,
      mpaaRating: this.state.mpaaRating,
      directorName: this.state.directorName,
      studioName: this.state.studioName,
      userRating: this.state.userRating
    }

    const request = new Request(`${url}/add-movie`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }),
      body: JSON.stringify(movie_data)
    })

    fetch(request)
      .then(response => {
        console.log(`post was successful: ${response}`)
        this.getMovies();
      })
      .catch(error => console.log(`fetch failed addMovie: ${error}`)
      )
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title />
        </Wrapper>
        <div className="form-group text-center">
          <h2 className="title">Store A Movie </h2>
          <input value={this.state.movieTitle} onChange={this.updateTitle} type="text" className="form-control" placeholder="Title" />
          <br />
          <input value={this.state.releaseDate} onChange={this.updateDate} type="text" className="form-control" placeholder="Release Year" />
          <br />
          <input value={this.state.mpaaRating} onChange={this.updateMpaa} type="text" className="form-control" placeholder="MPAA Rating" />
          <br />
          <input value={this.state.directorName} onChange={this.updateDirector} type="text" className="form-control" placeholder="Director" />
          <br />
          <input value={this.state.studioName} onChange={this.updateStudio} type="text" className="form-control" placeholder="Studio" />
          <br />
          <input value={this.state.userRating} onChange={this.updateUser} type="text" className="form-control" placeholder="Your Rating" />
          <br />
          <button onClick={this.addMovie} className="btn btn-danger">Submit Movie</button>
        </div>
        <Movie movie={this.state.movies} />
      </div>
    );
  }
}

export default App;
