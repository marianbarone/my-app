import React, {useState, useEffect} from 'react';
import MovieDetail from './MovieDetailContainer';


const MovieDetailContainer = () => {

    const [movie, setMovie] = useState ([])

    useEffect(() => {
    // setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Movies");
        itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size===0) {
            console.log('No hay resultados');
        }
        setMovie(querySnapshot.docs.map(doc => doc.data()));
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
