import Carrousel from './Carrousel';
import '../sass/style.css';
import close from '../assets/images/icon-close.svg';
import { ReactComponent as PreviousIcon } from '../assets/images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../assets/images/icon-next.svg';

const Lightbox = ({
  isMobile,
  images,
  handleThumbnailClick,
  prevImage,
  nextImage,
  activeIndex,
  activateLightbox }) => {

  return (
    <div className={isMobile ? 'lightbox--smallscreen' : 'lightbox'}>
        <div className='lightbox__wrapper'>
            <button>
                <img
                onClick={activateLightbox}
                className='lightbox__image-button--close'
                src={close} alt='button to close the carrousel'/>
            </button>
            
            <Carrousel
                isMobile={isMobile}
                images={images}
                handleThumbnailClick={handleThumbnailClick}
                prevImage={prevImage}
                nextImage={nextImage}
                activeIndex={activeIndex}
                activateLightbox={activateLightbox}
            />

            <button className='lightbox__image-button--previous' onClick={prevImage}>
                <PreviousIcon />
            </button>
            <button className='lightbox__image-button--next' onClick={nextImage}>
                <NextIcon />
            </button>
        </div>
    </div>
    );
};

export default Lightbox;

