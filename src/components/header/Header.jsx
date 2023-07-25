import './header.css'
import logoImg from './../../image/icons/logo.svg'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <nav className="header__nav">
                        <ul className='header__list'>
                            <li className='header__item'>
                                <a className='header__link' href="#!">LIFESTYLE</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link' href="#!">FAVOURITE</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link' href="#!">FASHION</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link' href="#!">CATALOGUE</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link header__link-btn' href="#!">SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;