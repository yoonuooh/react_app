import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <Movie
            key={movie.data.movie.id}
            id={movie.data.movie.id}
            coverImg={movie.data.movie.medium_cover_image}
            title={movie.data.movie.title}
            summary={movie.data.movie.summary}
            genres={movie.data.movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
