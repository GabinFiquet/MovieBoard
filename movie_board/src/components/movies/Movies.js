import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Movie from './Movie';
import styles from './Movies.module.css';

const Movies = (props) => {
    return (
        <main className={styles.moviesList}>
            <section className={styles.redBanner}>
                <div className={styles.container}>
                    <a href='/add-movie'>Ajouter un film</a>
                </div>
            </section>
            {props.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} deleteMovie={props.deleteMovie}></Movie>
            ))}
        </main>
    )
}
export default Movies;