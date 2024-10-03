
import './Navbar.css';
import {  NavLink } from 'react-router-dom';

type TNavItems = {
    title : string;
    path : string;
};

const navItems : TNavItems[]= [
    {title : 'Accueil', path: '/'},
    {title: 'Les réalisateurs', path: '/realisateurs'},
    {title: 'Les films', path: '/films'},
    {title: 'Mes listes', path: '/listes'},
];

function NavBar (){
    return (
        <nav className='nav'>
          <div className='logo'>
            <NavLink to="/" className='link'>
              Ghibliothèque
            </NavLink>
          </div>
          <ul className='navItems'>
          {navItems.map((item) => (
            <li key={item.title} className='navItem'>
              <NavLink to={item.path} className='link'>
               {item.title}
              </NavLink>
            </li>
            ))}
          </ul>
    </nav>
  );
}

export default NavBar;


