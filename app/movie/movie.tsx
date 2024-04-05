import Link from "next/link";
import styles from "./movie.module.css"
import { useRouter } from "next/navigation";
import { SquareArrowOutUpRight } from "lucide-react";

interface MovieProps {
    id: number;
    coverImg: string;
    title: string;
    year: string;
    summary: string;
    genres: string[];
}

function Movie ({ id, coverImg, title, year, summary, genres }: MovieProps) {
  const router = useRouter();

  return (
    <div className={styles.movie}>
      <div className="flex flex-col w-full h-full">
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <SquareArrowOutUpRight onClick={() => router.push(`/movie/${id}`)} className="flex flex-col md:hidden"/>
      </div>

      <Link href={`/movie/${id}`} >
        <div className="h-full w-full hidden md:flex flex-col">
        <h2 className="m-0 text-2xl no-underline">
          {title}
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        </div>
      </Link>
    </div>
  );
}

export default Movie;