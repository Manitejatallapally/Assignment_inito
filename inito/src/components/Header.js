import '../styles/Header.css';
import logo from '../images/initoLogo.svg';
import menu from '../images/menu.svg';

export default function Header() {

    return (

        <div className="header">
            <img src={menu} className="menu"></img>
            <img src={logo} className="logo"></img>
            <div style={{ flex: 1 }}></div>
            <div className='navBar'>
                <a className="navItem">About Us</a>
                <a className="navItem">Blog</a>
                <a className="navItem">FAQ</a>
                <a className="navItem">Contact Us</a>
                <button className="button">Try Inito</button>
            </div>


        </div>

    );
}