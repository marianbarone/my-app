import React, {useState, useEffect} from 'react';
import MovieDetail from './MovieDetailContainer';
import { getFirestore } from "../../Firebase/firebase";


const MovieDetailContainer = () => {

    const [movie, setMovie] = useState ([])

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("Movies");
        const movie = itemCollection.doc(RS1FOn8c73LD4SgogB77).get();

        setMovie({ id: doc.id, ...doc.data() });

    },[]);

    return <MovieDetail movie={movie} />    
    
};

export default MovieDetailContainer
