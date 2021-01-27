import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import movieData from "../data/movieData.json";
import "./moviefiles/CardStyle.css";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      inputValue.current.value = q;

      const movieResults = movieData.moviedata
        .filter(item => item.title.toLowerCase().includes(q.toLowerCase()))
        .map(item => (
          <div id="tekrar">
            <br />

            <li id="searchlist" key={item.id} className="list-group-item">
              <Link to={`/movies/${item.id}`}> {item.title} </Link>{" "}
            </li>
          </div>
        ));
      setSearchResult(movieResults);
    }
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div id="aftersearchtop" className="from-group pb-5">
          <input
            name="q"
            className="form-control"
            id="search"
            placeholder="Search for which movie you want to"
            ref={inputValue}
            type="text"
          />
        </div>{" "}
        <div id="aftersearchbutton">
          <button
            id="searchbtn"
            type="submit"
            className="btn btn-danger fs-5"
            onClick={handleForm}
          >
            Search{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
      <ul id="aftersearchb" className="list-group text-center pt-5">
        {" "}
        {searchResult}{" "}
      </ul>{" "}
    </div>
  );
}

export default Search;
