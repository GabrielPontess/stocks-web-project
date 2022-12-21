import  React   from 'react';

import NavbarInicial from '../../Components/Public/NavbarInicial';
import Footer from '../../Components/Public/Footer';
import LoginLogo from '../../Assets/Img/LoginLogo.png'
import StockImg from '../../Assets/Img/caixaSAC.png'

import './styles.css';

const Login = () => {
    return(
        <div className="Login">
            <NavbarInicial />
            <div className='Container'>
                <div className='ImgContent'>
                    <img src={StockImg} className='StockImgLogin'/>
                </div>
                <div className='LoginContainer'>
                    <div className='LoginBox'>
                        <img src={LoginLogo} className='LoginLogo'/>
                        <div className='FormBox'>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Email</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Senha</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite a sua senha' />
                            </div>
                             </div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;