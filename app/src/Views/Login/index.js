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
            <aside className='Container'>
                <div className='ImgContent'>
                    <img src={StockImg} className='StockImg'/>
                </div>
                <div className='LoginContainer'>
                    <div className='LoginBox'>
                        <img src={LoginLogo} className='LoginLogo'/>
                        <div className='FormBox'>
                            <label for="Email">Email</label>
                            <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            <label for="Email">Senha</label>
                            <input id='Email' type="email" className='form-control' placeholder='Digite a sua senha' />
                        </div>
                        <button>Login</button>
                    </div>
                </div>
            </aside>
            <Footer />
        </div>
    );
}

export default Login;