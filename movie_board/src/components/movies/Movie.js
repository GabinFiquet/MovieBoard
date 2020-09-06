import React from 'react';
import styles from './Movie.module.css';

const Movie = (props) => {
    const date = props.movie.release_date.split('-');
    const months = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre'
    ];
    const alt = 'Affiche du film ' + props.movie.title;
    const href = '/Movie/' + props.movie.id;
    return (
        <article className={styles.movieCard}>
            <figcaption className={styles.movieHead}>
                <img src={props.movie.poster} alt={alt}></img>                
                <article className={styles.movieDescription}>
                    <div className={styles.bckgrndBlur}></div>
                    <div className={styles.textDescription}>
                        <h3>{props.movie.title}</h3>
                        <p>{props.movie.description}</p>
                        <a href={href}>En savoir plus</a>
                    </div>                    
                </article>
            </figcaption>
            <article className={styles.movieInformations}>
                <p>Date de sortie : <span>{date[2]}</span> <span >{months[parseInt(date[1])-1]}</span> <span>{date[0]}</span></p>
                <p>Genres : {props.movie.categories.join(', ')} </p>
            </article>
            <div className={styles.movieController}>
                <button className={styles.btnBlue}>Modifier</button>
                <button className={styles.btnRed} onClick={(e) => props.deleteMovie(e,props.movie.id)}>Supprimer</button>
            </div>
        </article>
    )
}
export default Movie;