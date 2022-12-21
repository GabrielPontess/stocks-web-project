import  React   from 'react';

import NavbarInicial from '../../Components/Public/NavbarInicial';
import Footer from '../../Components/Public/Footer';
import StockImg from '../../Assets/Img/caixaSUS.png'

import './styles.css';

const Registro = () => {
    return(
        <div className="Registro">
            <NavbarInicial />
            <div className='Container'>
                <div className='ImgContent'>
                    <img src={StockImg} className='StockImage'/>
                </div>
                <div className='RegistroContainer'>
                    <div className='RegistroBox'>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Email</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Senha</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite a sua senha' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Email</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Senha</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite a sua senha' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Email</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Senha</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite a sua senha' />
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Registro;