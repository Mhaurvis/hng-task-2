import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Movies from './Pages/Movies';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies/:id" element={<Movies />}/>
        </Routes>
    </div>
  );
}



export default App;