import React from 'react';
import Movie from './Movie';
import styles from './Movies.module.css';

const Movies = (props) => {
    return (
        <div className={styles.moviesList}>
            {props.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} ></Movie>
            ))}
        </div>
    )
}
export default Movies;