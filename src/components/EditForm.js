import React from 'react';
import './Component.css';

const EditForm = (props) =>
    <div className="container text-center">
        <div className="form-group">
            <h2 className="title">Edit Movie</h2>
            <input value={props.movieTitle}  type="text" className="form-control" placeholder="Title" />
            <br />
            <input value={props.releaseDate} year={props.year} type="text" className="form-control" placeholder="Release Year" />
            <br />
            <input value={props.mpaaRating} mpaa={props.mpaa} type="text" className="form-control" placeholder="MPAA Rating" />
            <br />
            <input value={props.directorName} director={props.director} type="text" className="form-control" placeholder="Director" />
            <br />
            <input value={props.studioName} studio={props.studio} type="text" className="form-control" placeholder="Studio" />
            <br />
            <input value={props.userRating} user={props.user} type="text" className="form-control" placeholder="Your Rating" />
            <br />
            <button onClick={() => props.onClick(props.id)} className="btn btn-danger">Update Movie</button>
        </div>
    </div>

export default EditForm;