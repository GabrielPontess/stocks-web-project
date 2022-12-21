import  React   from 'react';
import { Link } from 'react-router-dom';


import BtnApoiarProjeto from '../BtnApoiarProjeto';
import Logo from '../../../Assets/Img/caixafofa.png';
import './styles.css';

const NavbarInicial = () => {
    return(
        <div className="NavbarInicial">
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}> 
                        <img alt="StocksLogo" src={Logo} className="Logo"/>
                    </Link>
                    <div className='d-flex'>
                        <Link className="NavItem navbar-brand" to={'/Login'}>LOGIN</Link>
                        <Link className="NavItem navbar-brand" to={'/Registro'}>REGISTRO</Link>
                        <BtnApoiarProjeto />
                    </div>
                </div>
            </nav>               
         </div>
    );
}

export default NavbarInicial;