import React from 'react';

const Movie = (props) => {

    return (
        <div className="container">
        <div className="row">
            {props.movie.map(item => (
                <div className="text-center col-md-4" key={item.id}>
                    <p className="movieText">{item.movieTitle}</p>
                    <p className="movieText">{item.releaseDate}</p>
                    <p className="movieText">{item.mpaaRating}</p>
                    <p className="movieText">{item.directorName}</p>
                    <p className="movieText">{item.studioName}</p>
                    <p className="movieText">{item.userRating}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Movie;