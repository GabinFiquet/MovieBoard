import React from 'react';
import Movie from './Movie';

const Movies = props => {
    return (
        <div className={styles.movies-list}>
            {props.movies.map((movie) => (
                <Movie key={movie.id} ></Movie>
            ))}
        </div>
    )
}