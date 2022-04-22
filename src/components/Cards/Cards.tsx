import { FC } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

import './Cards.scss';
import { PropsCards } from '../../interfaces/card';

const Cards: FC<PropsCards> = ({ data, category }) => {
    return (
        <div className='covers container'>
            <div className="link">
                <Link to={'/'}>{ category }</Link>
            </div>
            <div className="product">
                {
                    data.map(cover => <Card {...cover} key={cover.id} />)
                }
            </div>
        </div>
    )
}

export default Cards