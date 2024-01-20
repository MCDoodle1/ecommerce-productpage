import '../sass/style.css';
import previous from '../assets/images/icon-previous.svg';
import next from '../assets/images/icon-next.svg';

const Carrousel = ({ 
    isMobile, 
    images, 
    handleThumbnailClick, 
    prevImage, 
    nextImage, 
    activeIndex, 
    activateLightbox,
    lightboxIsActive }) => {
    
    return (
        <figure className='product__image-wrapper'>
            { isMobile && 
                <button onClick={prevImage}>
                    <img className='product__image-button--previous' 
                    src={previous} alt='arrow left' />
                </button> 
            }
                <img 
                onClick={!isMobile ? activateLightbox : undefined}
                className={isMobile ? 'product__image' : 'product__image product__image--largescreen'} 
                src={images[activeIndex].largeImageUrl} 
                alt={`white and beige sneakers-${activeIndex}`} 
                /> 
            { isMobile &&
                <button onClick={nextImage}>
                    <img 
                    className='product__image-button--next' 
                    src={next} alt='arrow right' />
                </button> 
            } 
            { !isMobile && !lightboxIsActive &&
                <div className='product__gallery'>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className='product__gallery-button'
                            onClick={() => handleThumbnailClick(index)}>
                                <img 
                                src={image.thumbnailUrl}
                                className={`product__gallery-img${index}`}
                                alt={`white and beige sneakers-${activeIndex}`} />
                        </button>
                    ))}
                </div>  
            }
        </figure>
    );
};
 
export default Carrousel;