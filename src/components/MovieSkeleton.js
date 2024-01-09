import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../assets/Movie.module.css";

function MovieSkeleton() {
  return (
    <Skeleton className={styles.movie__img} style={{ borderRadius: "10px" }} />
  );
}

export default MovieSkeleton;
