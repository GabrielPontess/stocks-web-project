import  React   from 'react';

import SideBar from '../../Components/Public/SideBar';

import './styles.css';

const Tabelas = () => {
    return(
        <div className="Tabelas">
            <SideBar />
            <div className='TabelasContent'>
            <div className='card'>
                <div className='card-header'>
                        <h1>Tabelas</h1>
                    </div>
                    <div className='card-body'>
                        <h4>Bem-Vindo a Versão Beta do Stocks! Veja as funcionalidades disponíveis em nosso sistema</h4>
                        <br/>
                        <div className='row'>
                            <div className='col-2'>
                                <button className='btn btn-success'>Criar um novo estoque</button>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='content'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <th>Nome</th>
                                        <th>Tipo</th>
                                        <th>Qtd. Produtos</th>
                                        <th>Data de Criação</th>
                                        <th>Ações</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>dados</td>
                                            <td>dados</td>
                                            <td>dados</td>
                                            <td>dados</td>
                                            <td>dados</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabelas;