import React from 'react';

const Movie = (props) => {

    return (
        <div>
            {props.movie.map(item => (
                <div className="text-center" key={item.id}>
                    <p className="movieText">{item.movieTitle}</p>
                    <p className="movieText">{item.releaseDate}</p>
                    <p className="movieText">{item.mpaaRating}</p>
                    <p className="movieText">{item.directorName}</p>
                    <p className="movieText">{item.studioName}</p>
                    <p className="movieText">{item.userRating}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default Movie;