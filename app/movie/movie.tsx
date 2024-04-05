import Link from "next/link";
import styles from "./movie.module.css"

interface MovieProps {
    id: number;
    coverImg: string;
    title: string;
    year: string;
    summary: string;
    genres: string[];
}

function Movie ({ id, coverImg, title, year, summary, genres }: MovieProps) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <Link href={`/movie/${id}`} >
        <div className="hidden md:flex flex-col">
        <h2 className={styles.movie__title}>
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