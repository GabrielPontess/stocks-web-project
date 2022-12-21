import  React   from 'react';


import NavbarInicial from '../../Components/Public/NavbarInicial';
import Footer from '../../Components/Public/Footer';
import ApoieLogo from '../../Assets/Img/caixaregistro.png'
import  QrCode from '../../Assets/Img/qrcode.png'


import './styles.css';

const Apoie = () => {
    return(
        <div className="Apoie">
            <NavbarInicial />
            <div className='Container'>
                <div className='QrCodeContent'>
                    <img src={ApoieLogo} className='StockImage'/>
                </div>
                <div className='QrCodeContent'>
                    <img src={QrCode} className='StockImage'/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Apoie;