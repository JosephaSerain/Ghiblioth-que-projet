
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {
  

  return (
    <Router>
      <NavBar />
      <Header/>
      <MovieList/>
      
    </Router>
  );
}
    
  
    

export default App
