'use client'

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; 
import { Home, Loader } from "lucide-react";
import Link from "next/link";

function Detail () {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<any[] | any>([]);
  const [movies, setMovies] = useState<any[]>([]);

  const { id } = useParams();

  const router = useRouter();

  useEffect(() => {
    getMovie();
    getMovies();
  }, []);
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  return (
    <div className="h-full w-full justify-center items-center flex flex-col">
      {loading ? (
        <div className="h-full w-full flex justify-center items-center text-xl animate-spin">
          <Loader />
        </div>
      ) : (
        <div className="h-full w-3/4 flex flex-col gap-y-4 overflow-y-scroll mt-10">
          
          <div className="h-full w-full flex flex-col space-y-6 md:flex-row gap-x-4 items-center justify-center">

            <img src={movie.medium_cover_image} alt="img" width={300} height={300} className="shadow-xl rounded-lg"/>

            <div className="md:ml-10 border border-black/15 shadow-lg p-8">
            <Home width={25} height={25} onClick={() => router.push('/movie')} />
            <br />
             <h1 className="text-3xl font-extrabold py-3"> {movie.title} </h1>
             <p> Year: {movie.year} </p>
             <p> Rating: {movie.rating} </p>
            </div>

          </div>

          <div>

            <hr className="border-t border-black/25 my-16 md:my-10"/>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 h-full w-full">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <img src={movie.medium_cover_image} alt="image" />
              </Link>
          ))}
            </div>
          </div>

        </div>
      )}      
    </div>
  )
}

export default Detail;
