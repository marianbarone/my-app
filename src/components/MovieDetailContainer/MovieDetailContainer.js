import React, {useState, useEffect} from 'react';
import MovieDetail from './MovieDetailContainer';
import { getFirestore } from "../../Firebase/firebase";
import { useParams } from 'react-router-dom';

const MovieDetailContainer = () => {

    const [movie, setMovie] = useState ([]);

    let params = useParams();

    useEffect (() => {

        const db = getFirestore();
        const itemCollection = db.collection("Movies");
        const movieById = itemCollection.doc(params);
        movieById.get().then((data) => {
            if(data.size ===0) {
                console.log('No hay resultados');
            }
            console.log('data: ', data.data());
        }).catch((error) => {
            console.error('Error', error);
        })
        // setMovie(movieById);
    },[]);



    /*
    const filter = () {
        const db = getFirestore();
        const itemCollection = db.collection("Movies");
        const categoryFilter = itemCollection.where('category', '==', 'Popular');
        
        categoryFilter.get().then(data => {
            if(data.size === 0) {
                console.log('No hay informacion en el filtro');
            }
            return doc.data();
            console.log('category filter:', data);
        })
    }
    
    filter();
    
    */

    return <MovieDetail movie={movie} />    
    
};

export default MovieDetailContainer
