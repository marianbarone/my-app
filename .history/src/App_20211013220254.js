import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import {BrowserRouter, Switch} from 'react-router-dom;
import MovieList from './components/MovieList/MovieList';

function App() {

  const {movie} = MovieList;
  return (
    <BrowserRouter>
      <MiNavBar />
      <Switch>
        <MovieListContainer />
      </Switch>

    </BrowserRouter>
  )
}
export default App;
