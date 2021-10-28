import React, {useState, useEffect} from 'react';
import MovieDetail from './MovieDetailContainer';
import { getFirestore } from "../../Firebase/firebase";



const MovieDetailContainer = () => {

    const [movie, setMovie] = useState ([])

    useEffect(() => {
    // setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Movies");
        const item = itemCollection.doc(itemId);

        item.get().then((doc) => {
            if(!doc.exists) {
                console.log('No hay resultados');
                return;
        }
            setMovie({ id: doc.id, ...doc.data() });
        })
        // .catch((error) => {
        //   console.log("error", error);
        // }).finally(() => {
        //   setLoading(false);
        // });

    },[]);

    return <MovieDetail movie={movie} />    
    
};

export default MovieDetailContainer
