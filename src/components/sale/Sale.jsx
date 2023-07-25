import './sale.css'
import promo02 from './../../image/images/promo-img.jpg'

const Sale = () => {
    return (
        <section className="sale">
            <div className="container">
                <div className='sale__body'>
                    <div className="sale__img">
                        <img src={promo02} alt="" />
                    </div>
    
                    <div className="sale__content">
                        <div className="sale__title"><span className='highlight'><span>PAYDAY</span></span> SALE NOW</div>
                        <div className="sale__text">Spend minimal $100 get 30% off voucher code for your next purchase</div>
                        <div className="sale__text sale__text-bold">1 June - 10 June 2021</div>
                        <div className="sale__text">*Terms & Conditions apply</div>
                        <div className="sale__btn">
                            <a href="#" className="sale__link">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Sale;