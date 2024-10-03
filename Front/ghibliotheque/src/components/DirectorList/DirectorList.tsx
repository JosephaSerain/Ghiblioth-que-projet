import { useEffect, useState } from 'react';
import './DirectorList.css';
import axios from 'axios';
import 'bulma/css/bulma.css';


type TDirector = {
    id: number,
    name: string,
}

function DirectorList(){
    //URL de l'API
    const apiUrl = import.meta.env.VITE_API_URL;
    //STATE du film
    const [directors, setDirectors] = useState<TDirector[]>([]);

    useEffect(()=>{
        const fetchDirectors = async ()=>{
            try{
                const response = await axios.get(`${apiUrl}/realisateurs`);
                setDirectors(response.data);
            }catch(error){
                console.error('Erreur lors du fetch des films', error)
            }
        };
        fetchDirectors();
    }, []);

    return (
        <div className='boxContainer'>
            <h2 className='sectionName'>Les réalisateurs</h2>
            {directors.map((director) => (
                <div className='box' key={director.id}>
                    <h3>{director.name}</h3>
                    
                </div>
            ))}
        </div>
    );

}

export default DirectorList