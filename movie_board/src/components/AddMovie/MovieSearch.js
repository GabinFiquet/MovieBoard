import React from 'react';
import styles from './MovieSearch.module.css';

const MovieSearch = (props) => {
    const date = props.movieSearch.release_date.split('-');
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

    
    const alt = 'Affiche du film ' + props.movieSearch.title;
    const href = '/Movie/' + props.movieSearch.id;
    const srcPoster = 'https://image.tmdb.org/t/p/w342' + props.movieSearch.poster_path;

    
    return (
        <article className={styles.movieCard}>
            
            <figcaption className={styles.movieHead}>
                <img src={srcPoster} alt={alt}></img>                
                <article className={styles.movieDescription}>
                    <div className={styles.bckgrndBlur}></div>
                    <div className={styles.textDescription}>
                        <h3>{props.movieSearch.title}</h3>
                    </div>                    
                </article>
            </figcaption>
            <article className={styles.movieInformations}>
                <p>Date de sortie : <span>{date[2]}</span> <span >{months[parseInt(date[1])-1]}</span> <span>{date[0]}</span></p>
            </article>
            <div className={styles.movieController}>
                <a className={styles.btnGreen} href={href}>Ajouter</a>
            </div>            
        </article>
    )
}
export default MovieSearch;