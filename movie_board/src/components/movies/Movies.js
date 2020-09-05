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
                    <form>
                        <input type="text" name="title"  placeholder="Titre" autoFocus/> 
                        <input type="date" name="date"  autoFocus/>
                        <input type="text" name="categories"  placeholder="Genre" autoFocus/>
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    <a href='/add-movie'>Ajouter un film</a>
                </div>
            </section>
            {props.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} ></Movie>
            ))}
        </main>
    )
}
export default Movies;