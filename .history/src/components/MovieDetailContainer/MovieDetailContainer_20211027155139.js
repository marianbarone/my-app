import React, {useState, useEffect} from 'react';
import MovieDetail from './MovieDetailContainer';
import { getFirestore } from "../../Firebase/firebase";



const MovieDetailContainer = () => {

    const [movie, setMovie] = useState ([])


    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("Movies");
        const movie = itemCollection.doc(id);

        movie.get().then((doc) => {
            if(!doc.exists) {
                console.log('No hay resultados');
                return;
        }
            setMovie({ id: doc.id, ...doc.data() });
        })

    },[]);

    return <MovieDetail movie={movie} />    
    
};

export default MovieDetailContainer
