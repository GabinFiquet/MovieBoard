import React, { useEffect, useState } from 'react';

import apiAxios from '../../apiAxios.js';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import Actor from './Actor';
import Related from './Related';
import styles from './PageMovie.module.css';

const PageMovie = (props) => {
    const { movieID } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
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

    let date = [];
    let alt = '';
    let genres = '';
    
    useEffect(() => {
        apiAxios.getMovie(movieID)
          .then(res => {
            setMovieDetail(res);
          })
          .catch(err => {
            console.log(err.message)
          })
      }, []);

    if (movieDetail !== null){
         date = movieDetail.release_date.split('-');
         alt = 'Affiche du film ' + movieDetail.title;
         genres = movieDetail.categories.join(', ');
    }
    
    return (
        <main className={styles.movieDetail}>
            {movieDetail !== null && 
            <>
            <section className={styles.redBanner}>               
                <div className={styles.container}>
                    <a href='/'><FontAwesomeIcon icon={faShare} /></a>
                    <h1>{movieDetail.title}</h1>
                </div>
            </section>
            <section className={styles.movieInformation}>
                <div className={styles.container}>
                    <figcaption>
                        <img src={movieDetail.poster} alt={alt}></img>
                        <div className={styles.movieController}>
                            <button className={styles.btnBlue}>Modifier</button>
                            <button className={styles.btnRed} onClick={(e) => props.deleteMovie(e,movieDetail.id)}>Supprimer</button>
                        </div>
                    </figcaption>
                    <article>  
                        <h2>Informations</h2>
                        <p>Date de sortie : <span>{date[2]}</span> <span >{months[parseInt(date[1])-1]}</span> <span>{date[0]}</span></p>
                        <p>Genres : {genres} </p>
                        <p>{movieDetail.description}</p>
                    </article>
                </div>
            </section>
            <section className={styles.movieCasting}>
                <div className={styles.container}>  
                    <h2>Distribution</h2>
                    {movieDetail.actors.map((actor) => (
                    <Actor actor={actor} ></Actor>
                    ))}
                </div>
            </section>
            <section className={styles.movieRelated}>
                <div className={styles.container}>
                    <h2>Voir aussi</h2>
                    {movieDetail.similar_movies.map((related) => (
                    <Related related={related} ></Related>
                    ))}
                </div>
            </section>
            </>
            }
        </main>
    )
};

export default PageMovie;