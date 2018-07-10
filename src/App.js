import React, { Component } from 'react';
import Movie from './components/Movies';
import Wrapper from './components/Wrapper';
import Title from './components/Title';


const url = 'http://localhost:8080/api';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    this.getMovies();
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

  render() {
    return (
      <div>
      <Wrapper>
        <Title />
        </Wrapper>
      <Movie movie={this.state.movies} />
      </div>
    );
  }
}

export default App;
