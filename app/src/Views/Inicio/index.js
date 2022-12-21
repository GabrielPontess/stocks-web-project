import  React   from 'react';


import NavbarInicial from '../../Components/Public/NavbarInicial'; 
import Footer from '../../Components/Public/Footer';

import BoasVindas from '../../Assets/Img/Boas-Vindas.png'
import StockImg from '../../Assets/Img/Stock.png'
import './styles.css';

const Inicio = () => {
    return(
        <div className="Inicio">
            <NavbarInicial />
            <aside className='Container'>
                <div className='ImgContent'>
                    <img src={StockImg} className='StockImg'/>
                </div>
                <div className='DescriptionContent'>
                    <img src={BoasVindas} className='DescriptionImg'/>
                </div>
            </aside>
            <Footer />
        </div>
    );
}

export default Inicio;