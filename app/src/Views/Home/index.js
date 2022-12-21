import  React   from 'react';

import SideBar from '../../Components/Public/SideBar';
import Card from '../../Components/Home/Card';

import Estoques from '../../Assets/Img/boxes.png';
import Tabelas from '../../Assets/Img/frequency.png';
import Logout from '../../Assets/Img/log-out.png';

import './styles.css';

const Home = () => {
    return(
        <div className="Home">
            <SideBar />
            <div className='container d-flex'>
                <Card  Img={Tabelas} Title={"Visualização dos Estoques"} Body={"Visualização dos seus estoques criados com a possibilidade de gerenciamento dinâmico dos seus produtos."}/>
                <Card  Img={Estoques} Title={"Criação de Estoques"} Body={"Responsável pela criação e edição de novos estoques."}/>
                <Card  Img={Logout} Title={"Saída do Sistema"} Body={"Logout do usuário no sistema."}/>
            </div>
        </div>
    );
}

export default Home;