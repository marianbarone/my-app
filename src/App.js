import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <MiNavBar />
      <ItemListContainer />
      <ItemCount />
    </>
  )
}
export default App;
