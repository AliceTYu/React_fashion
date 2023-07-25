import './send.css'

const Send = () => {
    return (
        <section className="send">
            <div className="container">
                <div className='send__content'>
                    <div className="send__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                    <div className="send__text">Type your email down below and be young wild generation</div>
                    <div className="send__input">
                        <input placeholder='Add your email here' className="send__inp" type="text" />
                        <button className='send__btn'>SEND</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Send;