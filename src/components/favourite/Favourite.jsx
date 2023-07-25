import './favourite.css'

import Card from '../card/Card'

import card01Img from './../../image/images/promo-01.jpg'
import card02Img from './../../image/images/promo-02.jpg'

const Favourite = () => {
    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h2 className="title-2">
                        <span className='title-3'><span>Young’s Favourite</span></span>
                    </h2>
                </div>

                <div className="favourite__card">
                    <Card title="Trending on instagram" desc="Explore Now!" img={card01Img}/>
                    <Card title="All Under $40" desc="Explore Now!" img={card02Img}/>
                </div>
            </div>
        </section>
    );
}

export default Favourite;