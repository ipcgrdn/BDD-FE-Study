'use client'

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import Movie from "./movie"; 

function Moviepage () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([]);
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="h-full flex justify-center">
      {loading ? (
        <div className="h-full w-full flex justify-center items-center text-xl animate-spin">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-12 w-9/12 pt-16 overflow-y-scroll">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Moviepage;

// 타입 추론 불가능한 것 고쳐야 함.