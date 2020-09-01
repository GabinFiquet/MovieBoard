import React from 'react';
import styles from './Movie.module.css';

const Movie = (props) => {
    return (
        <div className={styles.movie-card}>
            <div className={styles.movie-head}>
                <img></img>
                <div className={styles.movie-description}>
                    <h3>Titre</h3>
                    <p>Synopsis</p>
                </div>
            </div>
            <div className={styles.movie-informations}>
                <p>Date de sortie : </p>
                <p>Genre : </p>
            </div>
            <div className={styles.movie-controller}>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>
    )
}
export default Movie;