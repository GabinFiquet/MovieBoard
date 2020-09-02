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
        <div className={styles.movieCard}>
            <div className={styles.movieHead}>
                <img src={props.movie.poster} alt={alt}></img>                
                <div className={styles.movieDescription}>
                    <div className={styles.bckgrndBlur}></div>
                    <div className={styles.textDescription}>
                        <h3>Titre : {props.movie.title}</h3>
                        <p>{props.movie.description}</p>
                        <a href={href}>En savoir plus</a>
                    </div>                    
                </div>
            </div>
            <div className={styles.movieInformations}>
                <p>Date de sortie : <span>{date[2]}</span> <span >{months[parseInt(date[1])-1]}</span> <span>{date[0]}</span></p>
                <p>Genres : {props.movie.categories.join(', ')} </p>
            </div>
            <div className={styles.movieController}>
                <button className={styles.btnBlue}>Modifier</button>
                <button className={styles.btnRed}>Supprimer</button>
            </div>
        </div>
    )
}
export default Movie;