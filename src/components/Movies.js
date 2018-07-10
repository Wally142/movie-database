import React from 'react';

const Movie = (props) => {

    return (
        <div className="container">
            <div className="row">
                {props.movie.map(item => (
                    <div className="text-center col-md-4" key={item.id}>
                        <h3 className="title">Movie Information</h3>
                        <button className="btn btn-default" onClick={() => props.onClick(item.id)}>Edit Movie</button>
                        <br />
                        <br />
                        <p className="movieText">Title: {item.movieTitle}</p>
                        <p className="movieText">Released: {item.releaseDate}</p>
                        <p className="movieText">MPAA Rating: {item.mpaaRating}</p>
                        <p className="movieText"> Director: {item.directorName}</p>
                        <p className="movieText"> Studio: {item.studioName}</p>
                        <p className="movieText"> User Score: {item.userRating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movie;