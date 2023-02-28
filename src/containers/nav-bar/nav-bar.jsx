import { NavLink } from 'react-router-dom';
import style from './nav-bar.module.css';

const CustomLink = ({ to, name }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? style.active : undefined}
    >
        {/* ↓ Possibilité d'avoir un rendu dynamique avec la variable "isActive" */}
        {({ isActive }) => !isActive ? (
            <span>{name}</span>
        ) : (
            <span>&gt; {name} &lt;</span>
        )}
    </NavLink>
);

const NavBar = () => (
    <nav className={style.main}>
        <ul>
            <li>
                <CustomLink to='/' name='Accueil' />
            </li>
            <li>
                <CustomLink to='/fruits' name='Fruits' />
            </li>
            <li>
                <CustomLink to='/hook' name='Hook' />
            </li>
            <li>
                <CustomLink to='/contact' name='Contact' />
            </li>
        </ul>
    </nav>
);

export default NavBar;