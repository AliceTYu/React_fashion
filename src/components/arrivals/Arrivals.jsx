import Card from '../card/Card';
import './arrivals.css'

import card01Img from './../../image/categories/cat-01.jpg'
import card02Img from './../../image/categories/cat-02.jpg'
import card03Img from './../../image/categories/cat-03.jpg'

const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">
                        <span className='title-3'><span>NEW ARRIVALS</span></span>
                    </h2>
                </div>

                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" desc="Explore Now!" img={card01Img}/>
                    <Card title="Coats & Parkas" desc="Explore Now!"  img={card02Img}/>
                    <Card title="Tees & T-Shirt" desc="Explore Now!"  img={card03Img}/>
                </div>
            </div>
        </section>
    );
}

export default Arrivals;