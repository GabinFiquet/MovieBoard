import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Movie from './Movie';
import styles from './Movies.module.css';

const Movies = (props) => {
    return (
        <div className={styles.moviesList}>
            <div className={styles.redBanner}>
                <div>
                    <form>
                        <input type="text" name="title"  placeholder="Titre" autoFocus/> 
                        <input type="date" name="date"  autoFocus/>
                        <input type="text" name="categories"  placeholder="Genre" autoFocus/>
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    <a href='#'>Ajouter un film</a>
                </div>
            </div>
            {props.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} ></Movie>
            ))}
        </div>
    )
}
export default Movies;