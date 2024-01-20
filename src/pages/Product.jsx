import '../sass/style.css';
import Carrousel from '../components/Carrousel';
import Lightbox from '../components/Lightbox';
import cart from '../assets/images/icon-cart-white.svg';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';


const Product = ( {
    isMobile, 
    images, 
    data,
    prevImage, 
    nextImage, 
    activeIndex, 
    handleThumbnailClick,
    lightboxIsActive, 
    activateLightbox,
    counter,
    handleClickPlus,
    handleClickMinus,
    handleCart }) => {

    return (
        <div className={isMobile ? 'product' : 'product--largescreen'}>
           <>
           <Carrousel
                isMobile={isMobile} 
                images={images}
                handleThumbnailClick={handleThumbnailClick}
                prevImage={prevImage}
                nextImage={nextImage}
                activeIndex={activeIndex}
                activateLightbox={activateLightbox}
                lightboxIsActive={lightboxIsActive}
            />
        <div className={isMobile ? 'product__wrapper product__wrapper--smallscreen' : 'product__wrapper'}>
                <span className='product__article-name'>sneaker company</span>
                <h1 className='product__article-title'>{data.name}</h1>
                <p className='product__article-text'>{data.description}</p>
                <div className={isMobile ? 'product__price-wrapper' : 'product__price-wrapper--largescreen'}>
                    <div className='product__price-subwrapper'>
                        <div className='product__price-net'>${data.netPrice.toFixed(2)}</div>
                        <div className='product__price-discount'>{data.discount}%</div>
                    </div>
                    <div className='product__price-gross'>${data.grossPrice.toFixed(2)}</div>
                </div>
                <div className={isMobile ? 'product__cta-wrapper' : 'product__cta-wrapper--largescreen'}>
                    <div className={'product__cta-button--neutral'}>
                        <button 
                            className='product__cta-button-minus'
                            onClick={handleClickMinus}>
                            <img src={minus} 
                            alt='button to decrease number of items to order' />
                        </button>
                        <div className='product__cta-button-amount'>{counter}</div>
                        <button 
                            className='product__cta-button-plus'
                            onClick={handleClickPlus}>
                            <img src={plus} alt='button to increase number of items to order' />
                        </button>
                    </div>
                    <button 
                        className='product__cta-button--primary'
                        onClick={handleCart}>
                        <div className='product__cta-button-cartimage'>
                            <figure>
                                <img src={cart} alt='' />
                            </figure>
                        </div>
                        <div className='product__cta-button-text'>Add to cart</div>
                    </button>
                </div>
            </div>
            </>
            {lightboxIsActive && 
            <Lightbox 
                isMobile={isMobile}
                images={images}
                handleThumbnailClick={handleThumbnailClick} 
                prevImage={prevImage}
                nextImage={nextImage}
                activeIndex={activeIndex} 
                activateLightbox={activateLightbox}/>
            }
        </div>
    );
}
 
export default Product;