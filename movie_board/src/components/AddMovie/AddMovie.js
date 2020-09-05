import React, { useEffect, useState } from 'react';

import apiTMBD from '../../apiTMDB';

import MovieSearch from './MovieSearch';

import styles from './AddMovie.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const AddMovie = () => {

    const [movieList, setMoviesList] = useState([]);
    const [formData, setFormData] = useState({
		titleSearch: '',
		date: '',
    });
    
    const onUpdateData = (event) => {
		const target = event.target,
			name = target.name,
			value = target.value;

		const data = { ...formData };
		    data[name] = value;
		    setFormData(data);
	};

	const onSubmitForm = (event) => {
        event.preventDefault();         
		console.log(formData); 
    };

    useEffect(() => {
        if (formData.titleSearch.length > 3){
        apiTMBD.getMovieList(formData.titleSearch)
            .then(res => {
                if (res.results.length > 0 ){                        
                    setMoviesList(res.results);
                }
                else {
                    console.log('Ya R')
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }}, [formData.titleSearch]);
    return (
        <main>
            <section className={styles.redBanner}>               
                    <div className={styles.container}>
                        <a href='/'><FontAwesomeIcon icon={faShare} /></a>
                        <form  action="" onSubmit={onSubmitForm}>
                                <input type="text" name="titleSearch"  placeholder="Titre" value={formData.titleSearch} onChange={onUpdateData} autoFocus/> 
                                <input type="date" name="date"  value={formData.date} onChange={onUpdateData} autoFocus/>
                                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                        </form>
                    </div>                    
            </section>
            <section className={styles.movieList}>
                {movieList.map((movieSearch) => (
                    <MovieSearch key={movieSearch.id} movieSearch={movieSearch}/>
                    ))}
                
            </section>
            <div className={styles.test}></div>
        </main>
)}

export default AddMovie;