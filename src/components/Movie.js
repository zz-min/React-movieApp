import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  const saveStateValues = (id, year, title, summary, poster, genres) => {
    localStorage.setItem("id", id);
    localStorage.setItem("year", year);
    localStorage.setItem("title", title);
    localStorage.setItem("summary", summary);
    localStorage.setItem("poster", poster);
    localStorage.setItem("genres", genres);
  };

  return (
    //라우팅시 컴포넌트에 정보 넘겨주기 : link to={객체}
    /* <v5> => withRouter
    라우터에 의해 호출된 컴포넌트가 아니더라도 
    match, location, history 를 props로 전달 해준다.
    
    <v6> => withRouter없어서 대신 Hook으로 구현
    import { useParams, useLocation, useNavigation } from "react-router-dom";
    const params = useParams(); // params.id 이런식으로 파라미터 접근
    const location = useLocation(); // location.pathname 이런식으로 주소접근
    const navigate = useNavigate(); // navigate('/') 이런식으로 이동
    */
    /* <v6> => Link to 에서 더이상 state/props 전달 불가
    state: {year,title,summary,poster,genres} */
    <Link
      to={{
        pathname: "/movie-detail",
      }}
      onClick={() => saveStateValues(id, year, title, summary, poster, genres)}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title"> {title}</h3>
          <h5 className="movie_year"> {year}</h5>
          <ul className="genres">
            {genres.map((genres, index) => (
              <li className="genres" key={index}>
                {index + 1}.{genres}{" "}
              </li>
            ))}
          </ul>
          <p className="movie_summary"> {summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
