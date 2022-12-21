import  React   from 'react';
import { useNavigate } from 'react-router-dom';

import Estoques from '../../../Assets/Img/boxes.png';
import Tabelas from '../../../Assets/Img/frequency.png';
import Logout from '../../../Assets/Img/log-out.png';

import './styles.css';

const Card = ({Img,Title,Body}) => {
    const navigate = useNavigate()

    return(
        <div className='Card'>
            <div className='CardContent'>
                <img className='CardImg' src={Img} />
                <div className='CardTitle'>
                    {Title}
                </div>
                <div className='CardBody'>
                    {Body}
                </div>
            </div>
         </div>
    );
}

export default Card;