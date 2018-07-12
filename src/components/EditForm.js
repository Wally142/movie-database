import React from 'react';
import './Component.css';

const EditForm = (props) =>
    <div className="container text-center">
        <div className="form-group">
            <h2 className="title">Edit Movie</h2>
            <input value={props.title} onChange={props.update1} type="text" className="form-control" placeholder="Title" />
            <br />
            <input value={props.year} onChange={props.update2} type="text" className="form-control" placeholder="Release Year" />
            <br />
            <input value={props.mpaa} onChange={props.update3} type="text" className="form-control" placeholder="MPAA Rating" />
            <br />
            <input value={props.director} onChange={props.update4} type="text" className="form-control" placeholder="Director" />
            <br />
            <input value={props.studio} onChange={props.update5} type="text" className="form-control" placeholder="Studio" />
            <br />
            <input value={props.user} onChange={props.update6} type="text" className="form-control" placeholder="Your Rating" />
            <br />
            <button onClick={() => props.onClick(props.id)} className="btn btn-danger">Update Movie</button>
        </div>
    </div>

export default EditForm;