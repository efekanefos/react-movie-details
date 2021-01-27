import React from "react";
import { useParams, Link } from "react-router-dom";
import movieData from "../../data/movieData.json";
import "../moviefiles/CardStyle.css";

function MovieDetail(props) {
  const params = useParams();
  const { movieID } = params;

  const movie = movieData.moviedata
    .filter(item => item.id === Number(movieID))
    .map(item => (
      <div id="detailbackh" key={item.id}>
        <img
          id="gifs"
          className="d-block mx-auto"
          src={item.detailimg}
          alt="gg"
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-white text-center m-0 pt-4 ">{item.title}</h1>
              <p className="text-white text-center m-0 pt-4">
                {item.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div id="detailback">
      <nav aria-label="breadcrumb" className="mt-5 pt-3 pb-3">
        <ol id="bread" className="breadcrumb">
          <li className="breadcrumb-item text-white">
            <Link to="/">HomePage</Link>
          </li>
          <li className="breadcrumb-item text-white">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="breadcrumb-item text-white">Read More</li>
        </ol>
      </nav>
      {movie}
    </div>
  );
}

export default MovieDetail;
