import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieSkeleton from "./components/MovieSkeleton";
import Movie from "./components/Movie";
import Modal from "react-modal";
import Loading from "./components/Loading";
import Detail from "./components/Detail";
import styles from "./assets/App.module.css";
import ModalStyles from "./assets/ModalStyles";

Modal.setAppElement("#root");

function App() {
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [clickedMovie, setClickedMovie] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const loadMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=download_count"
    );
    const { data } = await response.json();

    setMovies(data.movies);
    setMoviesLoading(false);
  };
  useEffect(() => {
    loadMovies();
  }, []);

  const afterOpenModal = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${clickedMovie}`
    );
    const { data } = await response.json();

    setMovie(data.movie);
    setMovieLoading(false);
  };
  const closeModal = async () => {
    setIsOpen(false);
    setMovieLoading(true);
  };

  return (
    <>
      <Header />
      <section className={styles.movies}>
        {moviesLoading
          ? new Array(20).fill(0).map((_, idx) => <MovieSkeleton key={idx} />)
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title}
                year={movie.year}
                setClickedMovie={setClickedMovie}
                setIsOpen={setIsOpen}
              />
            ))}
      </section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyles}
      >
        {movieLoading ? (
          <Loading />
        ) : (
          <Detail
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            description={movie.description_intro}
            setIsOpen={setIsOpen}
            setMovieLoading={setMovieLoading}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
