import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import 'bulma/css/bulma.css';

type TList = {
    id: number,
    name: string,
};

function List(){
    //URL de l'API
    const apiUrl = import.meta.env.VITE_API_URL;
    //STATE du film
    const [lists, setLists] = useState<TList[]>([]);

    useEffect (()=> {
        const fetchLists = async ()=>{
            try{
                const response = await axios.get(`${apiUrl}/listes`);
                setLists(response.data);
            } catch(error){
                console.error('Erreur lors du fetch des listes', error);
            }
        };
        fetchLists();
    }, []);

    return(
        <div className='boxContainer'>
            <h2 className='sectionName'>Mes listes</h2>
            {lists.map((list) => (
                <div className='box' key={list.id}>
                    <h3>{list.name}</h3>
                    
                </div>
            ))}
        </div>
    );
}

export default List