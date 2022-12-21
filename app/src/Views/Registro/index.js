import  React   from 'react';

import NavbarInicial from '../../Components/Public/NavbarInicial';
import Footer from '../../Components/Public/Footer';
import StockImg from '../../Assets/Img/caixaSUS.png'

import './styles.css';

const Registro = () => {
    return(
        <div className="Registro">
            <NavbarInicial />
            <aside className='Container'>
                <div className='ImgContent'>
                    <img src={StockImg} className='StockImg'/>
                </div>
                <div className='RegistroBox'>
                </div>
            </aside>
            <Footer />
        </div>
    );
}

export default Registro;