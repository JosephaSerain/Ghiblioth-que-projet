
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import DirectorList from './components/DirectorList/DirectorList';
import List from './components/Lists/Lists';

function App() {
  

  return (
    <>
     <NavBar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/films' element={<MovieList/>}/>
        <Route path='/realisateurs' element={<DirectorList/>}/>
        <Route path='/listes' element={<List/>}/>


      </Routes>
      
      
    </>
  );
}
    
  
    

export default App
