import PropTypes from "prop-types";
import styles from "../assets/Detail.module.css";

function Detail({
  coverImg,
  title,
  year,
  rating,
  runtime,
  genres,
  description,
  setIsOpen,
  setMovieLoading,
}) {
  const onClick = () => {
    setIsOpen(false);
    setMovieLoading(true);
  };
  return (
    <div className={styles.detail}>
      <img className={styles.detail__img} src={coverImg} alt={`Img ${title}`} />
      <h2 className={styles.detail__title}>{title}</h2>
      <div className={styles.detail__meta}>
        <span>📅 {year}</span>
        <span>⭐ {rating}/10</span>
        <span>⏱️ {runtime} min</span>
      </div>
      <div className={styles.detail__genreContainer}>
        <span>🎬</span>
        <div className={styles.detail__genres}>
          {genres.map((g) => (
            <span key={g}>#{g}</span>
          ))}
        </div>
      </div>
      <p className={styles.detail__description}>
        {description.length < 350
          ? description
          : description.slice(0, 350) + "..."}
      </p>
      <button className={styles.detail__exit} onClick={onClick}>
        ❌
      </button>
    </div>
  );
}

Detail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setMovieLoading: PropTypes.func.isRequired,
};

export default Detail;
