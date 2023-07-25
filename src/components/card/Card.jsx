import './card.css'

import arrowIcon from './../../image/icons/arrow.svg'

const Card = (props) => {
    return (
        <div className="card">
            <a href="#!" className="card__link"></a>
            <img className="card__img" src={props.img} alt="card" />

            <div className="card__body">
                <div className="card__content">
                    <div className="card_title">{props.title}</div>
                    <div className="card__desc">{props.desc}</div>
                </div>

                <div className="card__icon">
                    <img src={arrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Card;