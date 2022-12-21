import  React   from 'react';
import { useNavigate } from 'react-router-dom';


import StockLogo from '../../../Assets/Img/caixafofa.png';
import Estoques from '../../../Assets/Img/boxes.png';
import Tabelas from '../../../Assets/Img/frequency.png';
import Logout from '../../../Assets/Img/log-out.png';


import './styles.css';

const SideBar = () => {  
    const navigate = useNavigate()

    return(
        <div className="Sidebar">      
            <nav className='SidebarContent'>
                <img src={StockLogo}  className='SidebarLogo' onClick={()=> navigate('/Home')}/>
                <img src={Tabelas}  className='SidebarItem' onClick={()=> navigate('/Tabelas')}/>
                <img src={Estoques}  className='SidebarItem' onClick={()=> navigate('/Estoques')}/>
                <img src={Logout}  className='SidebarItem Exit' onClick={()=> navigate('/')}/>
            </nav>
        </div>
    );
}

export default SideBar;