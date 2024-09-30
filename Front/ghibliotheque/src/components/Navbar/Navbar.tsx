
import './Navbar.css';
import { Link } from 'react-router-dom';

type TNavItems = {
    title : string;
    path : string;
};

const navItems : TNavItems[]= [
    {title : 'Accueil', path: '/'},
    {title : 'Le studio', path: '/studio'},
    {title: 'Les réalisateurs', path: '/realisateurs'},
    {title: 'Les films', path: '/films'},
    {title: 'Mes listes', path: '/listes'},
];

function NavBar (){
    return (
        <nav className='nav'>
          <div className='logo'>
            <Link to="/" className='link'>
              Ghibliothèque
            </Link>
          </div>
          <ul className='navItems'>
          {navItems.map((item) => (
            <li key={item.title} className='navItem'>
              <Link to={item.path} className='link'>
               {item.title}
              </Link>
            </li>
            ))}
          </ul>
    </nav>
  );
}

export default NavBar;


