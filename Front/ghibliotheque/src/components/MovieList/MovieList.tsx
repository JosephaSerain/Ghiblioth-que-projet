import { useEffect, useState } from 'react';
import './MovieList.css';
import axios from 'axios';
import 'bulma/css/bulma.css';

type TMovie = {
    id: number;
    name: string;
    date: number;
    resume: string;
    image: string;
    bande_annonce: string 
};


function MovieList(){
    //URL de l'API
    const apiUrl = import.meta.env.VITE_API_URL;

    //STATE du film
    const [movies, setMovies] = useState<TMovie[]>([]);

    useEffect(()=>{
        const fetchMovies = async ()=>{
            try {
                const response = await axios.get(`${apiUrl}/films`)
                setMovies(response.data);
            } catch (error){
                console.error('Erreur lors du fetch des films', error)
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className='boxContainer'>
            <h2 className='sectionName'>Les films</h2>
            {movies.map((movie) => (
                <div className='box' key={movie.id}>
                    <h3>{movie.name}</h3>
                    
                </div>
            ))}
        </div>
    );

}

export default MovieList;
