import PropTypes from "prop-types";
import styles from "../assets/Movie.module.css";

function Movie({ id, coverImg, title, year, setClickedMovie, setIsOpen }) {
  const onClick = () => {
    setClickedMovie(id);
    setIsOpen(true);
  };
  return (
    <div className={styles.movie} onClick={onClick}>
      <img className={styles.movie__img} src={coverImg} alt={`Img ${title}`} />
      <div className={styles.movie__info}>
        <span className={styles.movie__title}>{title}</span>
        <span className={styles.movie__year}>{year}</span>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  setClickedMovie: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Movie;
