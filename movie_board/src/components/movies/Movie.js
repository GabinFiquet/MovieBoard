import React from 'react';
import styles from './Movie.module.css';

const Movie = (props) => {
    const date = props.movie.release_date.split('-');
    console.log(date)

    return (
        <div className={styles.movieCard}>
            <div className={styles.movieHead}>
                <img src={props.movie.poster} alt='Affiche du film {props.movie.title}'></img>                
                <div className={styles.movieDescription}>
                    <div className={styles.bckgrndBlur}></div>
                    <div className={styles.textDescription}>
                        <h3>Titre : {props.movie.title}</h3>
                        <p>{props.movie.description}</p>
                        <a href='#'>En savoir plus</a>
                    </div>                    
                </div>
            </div>
            <div className={styles.movieInformations}>
                <p>Date de sortie : <span className="day">{date[2]}</span> <span className="month">{date[1]}</span> <span className="year">{date[0]}</span></p>
                <p>Genre : {props.movie.categories} </p>
            </div>
            <div className={styles.movieController}>
                <button className={styles.btnBlue}>Modifier</button>
                <button className={styles.btnRed}>Supprimer</button>
            </div>
        </div>
    )
}
export default Movie;