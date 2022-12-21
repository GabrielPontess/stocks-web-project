import  React   from 'react';
import { Link } from 'react-router-dom';


import StockLogo from '../../../Assets/Img/caixafofa.png';
import Estoques from '../../../Assets/Img/boxes.png';
import Tabelas from '../../../Assets/Img/frequency.png';
import Logout from '../../../Assets/Img/log-out.png';


import './styles.css';

const SideBar = () => {
    return(
        <div className="Sidebar">      
            <nav className='SidebarContent'>
                <img src={StockLogo}  className='SidebarLogo'/>
                <hr />
                <img src={Tabelas}  className='SidebarItem'/>
                <img src={Estoques}  className='SidebarItem'/>
                <img src={Logout}  className='SidebarItem'/>
            </nav>
        </div>
    );
}

export default SideBar;