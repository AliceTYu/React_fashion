import './footer.css'

import fbImg from './../../image/social/fb.svg'
import instImg from './../../image/social/inst.svg'
import twImg from './../../image/social/tw.svg'
import inImg from './../../image/social/in.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__info info">
                        <div className="info__title">FASHION</div>
                        <div className="info__text">Complete your style with awesome clothes from us.</div>
                        <div className="info__social">
                            <ul className="info__list">
                                <li className="info__item">
                                    <a href="#" className="info__link">
                                        <img src={fbImg} alt="fb" />
                                    </a>
                                </li>
                                <li className="info__item">
                                    <a href="#" className="info__link">
                                        <img src={instImg} alt="insta" />
                                    </a>
                                </li>
                                <li className="info__item">
                                    <a href="#" className="info__link">
                                        <img src={twImg} alt="tw" />
                                    </a>
                                </li>
                                <li className="info__item">
                                    <a href="#" className="info__link">
                                        <img src={inImg} alt="in" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="footer__menu">
                        <div className="menu__comp">
                            <div className="menu__text">Company</div>
                            <a href="#" className="menu__link">About</a>
                            <a href="#" className="menu__link">Contact us</a>
                            <a href="#" className="menu__link">Support</a>
                            <a href="#" className="menu__link">Careers</a>
                        </div>

                        <div className="menu__comp">
                        <div className="menu__text">Quick Link</div>
                            <a href="#" className="menu__link">Share Location</a>
                            <a href="#" className="menu__link">Orders Tracking</a>
                            <a href="#" className="menu__link">Size Guide</a>
                            <a href="#" className="menu__link">FAQs</a>
                        </div>

                        <div className="menu__comp">
                        <div className="menu__text">Legal</div>
                            <a href="#" className="menu__link">Terms & conditions</a>
                            <a href="#" className="menu__link">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;