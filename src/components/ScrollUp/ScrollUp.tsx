import './ScrollUp.scss';

const ScrollUp = () => (
    <div className='scroll-up' onClick={() => window.scrollTo(0, 0)}>
        <i className="fa-solid fa-angle-up"></i>
    </div>
)

export default ScrollUp;