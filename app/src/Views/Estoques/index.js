import  React   from 'react';

import SideBar from '../../Components/Public/SideBar';

import './styles.css';

const Estoques = () => {
    return(
        <div className="Estoques">
            <SideBar />
            <div className='EstoquesContent'>
            <div className='card'>
                <div className='card-header'>
                        <h1>Estoques</h1>
                    </div>
                    <div className='card-body'>
                        <h4>Bem-Vindo a Versão Beta do Stocks! Veja as funcionalidades disponíveis em nosso sistema</h4>
                        <br/>
                        <div className='row CardsContainer'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estoques;