import { useState } from 'react';
import { useWindowResizer } from '../src/hooks/useWindowResizer';
import { NavLink } from 'react-router-dom';
import Header from './pages/Header';
import Product from './pages/Product';


function App() {
  
  const productData = 
    {
      name: 'Fall Limited Edition Sneakers',
      grossPrice: 250,
      discount: 50,
      netPrice: 125,
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
      images: [
          {
            thumbnailUrl: require('./assets/images/image-product-1-thumbnail.jpg'),
            largeImageUrl: require('./assets/images/image-product-1.jpg'),
          },
          {
            thumbnailUrl: require('./assets/images/image-product-2-thumbnail.jpg'),
            largeImageUrl: require('./assets/images/image-product-2.jpg'),
          },
          {
            thumbnailUrl: require('./assets/images/image-product-3-thumbnail.jpg'),
            largeImageUrl: require('./assets/images/image-product-3.jpg'),
          },
          {
            thumbnailUrl: require('./assets/images/image-product-4-thumbnail.jpg'),
            largeImageUrl: require('./assets/images/image-product-4.jpg'),
          },
      ]
    }
  
  const [menuIsActive, setMenuIsActive] = useState(false);
  const isMobile = useWindowResizer()
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIsActive, setLightboxIsActive] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [cartIsActive, setCartIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [totalInCart, setTotalInCart] = useState(0);

  /* button click to go the next image in the carrousel */
  const nextImage = () => {
    setActiveIndex(prev => 
      prev === productData.images.length - 1 ? 0 : prev + 1);
  };

   /* button click to go the previous image in the carrousel - if user is on the last image,
   first image will be displayed */
  const prevImage = () => {
    setActiveIndex(prev => 
      prev === 0 ? productData.images.length - 1 : prev - 1)
  };

  /* function that helps select the corresponding larger image to the thumbnail image */
  const handleThumbnailClick = (index) => {
      if (index === 0) {
        setActiveIndex(0)
      } else if (index === 1) {
        setActiveIndex(1)
      } else if (index === 2) {
        setActiveIndex(2)
      } else {
        setActiveIndex(3)
      }
      }
  
  /* opens and closes the hamburger menu on small screens */
  const activateMenu = () => 
    setMenuIsActive(!menuIsActive);

  /* opens and closes the lightbox menu on large screens */
  const activateLightbox = () => {
      setLightboxIsActive(!lightboxIsActive);
    };
  
  /* function that shows number of items in the cart and toggles cart from empty to not empty */
  const handleCart = () => {
    if (counter > 0) {
      setTotalInCart((prev) => prev + counter);
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  };

  /* function linked to button that opens and closes the cart */
  const activateCart = () => {
      setCartIsActive(!cartIsActive);
    };
  
  /* function linked to button that adds an item when clicked  */
  const handleClickPlus = () => {
    setCounter(counter + 1);
  };

  /* function linked to button that decreases an item when clicked  */
  const handleClickMinus = () => {
      counter > 0 && setCounter(counter - 1);
  };

  /* function linked to button that removes all units of an item when clicked  */
  const removeFromCart = () => {
      setTotalInCart(0);
      setCartIsEmpty(true);
  };

  /* function linked to checkout button (removes all items in cart and closes it) */
  const handleCheckout = () => {
    setTotalInCart(0);
    setCartIsEmpty(true);
    setCartIsActive(false);
};

  /* helper function for the menu */
  const renderMenuItems = () => (
    <ul className={isMobile ? "header__menu--smallscreen" : "header__menu--largescreen"}>
      <li className={isMobile ? "" : "header__menu-item"}>
        <NavLink to="#">Collections</NavLink>
      </li>
      <li className={isMobile ? "" : "header__menu-item"}>
        <NavLink to="#">Men</NavLink>
      </li>
      <li className={isMobile ? "" : "header__menu-item"}>
        <NavLink to="#">Women</NavLink>
      </li>
      <li className={isMobile ? "" : "header__menu-item"}>
        <NavLink to="#">About</NavLink>
      </li>
      <li className={isMobile ? "" : "header__menu-item"}>
        <NavLink to="#">Contact</NavLink>
      </li>
    </ul>
  );
    
  return (
    <>
    <Header 
      isMobile={isMobile}
      activateMenu={activateMenu}
      menuIsActive={menuIsActive}
      handleCart={handleCart}
      activateCart={activateCart}
      cartIsActive={cartIsActive}
      cartIsEmpty={cartIsEmpty}
      data={productData}
      activeIndex={activeIndex}
      totalInCart={totalInCart}
      removeFromCart={removeFromCart}
      handleCheckout={handleCheckout}
      renderMenuItems={renderMenuItems}
    />
    <Product 
      isMobile={isMobile}
      prevImage={prevImage}
      nextImage={nextImage}
      activeIndex={activeIndex}
      handleThumbnailClick={handleThumbnailClick}
      images={productData.images}
      data={productData}
      activateLightbox={activateLightbox}
      lightboxIsActive={lightboxIsActive}
      counter={counter}
      handleClickPlus={handleClickPlus}
      handleClickMinus={handleClickMinus}
      handleCart={handleCart}
    />
    </>
    
  );
}

export default App;
