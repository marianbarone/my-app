import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <MiNavBar />
      <MovieListContainer />
    </>
  )
}
export default App;
