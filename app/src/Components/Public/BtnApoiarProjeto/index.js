import  React   from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const BtnApoiarProjeto = () => {
    const navigate = useNavigate()

    return(
        <div>
            <button className="BtnApoiarProjeto"  onClick={()=> navigate('/Apoie')}>APOIE O PROJETO</button>
         </div>
    );
}

export default BtnApoiarProjeto;