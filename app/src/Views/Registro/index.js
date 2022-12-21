import  React   from 'react';

import RegistroLogo from '../../Assets/Img/RegistroLogo.png'
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
                <div className='ContainerForm'>
                    <div className='BoxForm'>
                        <img src={RegistroLogo} className='RegistroLogo'/>
                         <div className='FormBox'>
                            <div className='FormItem'>
                                <label for="Nome" className='Labels'>Nome</label>
                                <input id='Nome' type="text" className='form-control' placeholder='Digite seu nome' />
                            </div>
                            <div className='FormItem'>
                                <label for="Email" className='Labels'>Email</label>
                                <input id='Email' type="email" className='form-control' placeholder='Digite o seu email' />
                            </div>
                            <div className='FormItem'>
                                <label for="DataNascimento" className='Labels'>Data de Nascimento</label>
                                <input id='DataNascimento' type="date" className='form-control' />
                            </div>
                            <div className='FormItem'>
                                <label for="Genero" className='Labels'>Gênero</label>
                                <select id='Genero' className='form-control' placeholder='Selecione o seu gênero'> 
                                    <option value="F">Feminino</option>
                                    <option value="M">Masculino</option>
                                    <option value="O">Outro</option>
                                </select>
                            </div>
                            <div className='FormItem'>
                                <label for="Senha" className='Labels'>Senha</label>
                                <input id='Senha' type="password" className='form-control' placeholder='Digite sua senha' />
                            </div>
                            <div className='FormItem'>
                                <label for="Senha" className='Labels'>Confirmar Senha</label>
                                <input id='Senha' type="password" className='form-control' placeholder='Confirme sua senha' />
                            </div>
                         </div>
                         <button>Registro</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Registro;