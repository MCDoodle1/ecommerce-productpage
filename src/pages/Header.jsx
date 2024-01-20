import Menu from '../components/Menu';
import Cart from '../components/Cart';
import '../sass/style.css';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';

const Header = ( {
    isMobile, 
    activateMenu, 
    menuIsActive, 
    activateCart, 
    cartIsActive, 
    cartIsEmpty, 
    data, 
    totalInCart, 
    removeFromCart,
    handleCheckout,
    renderMenuItems } ) => {

    return (  
        <div className={isMobile ? 'header' : 'header header--largescreen'}>
            <div className={isMobile ? 'header-wrapper-left': 'header-wrapper-left--largescreen'}>               
                <Menu 
                    menuIsActive={menuIsActive} 
                    activateMenu={activateMenu}
                    isMobile={isMobile}
                    renderMenuItems={renderMenuItems}
                />           
            </div> 
            <div className='header-wrapper-right'>
                <button 
                    className='header__cart'
                    onClick={activateCart}>
                        <figure>
                            <img 
                                className='header__cart-image' 
                                src={cart} alt='shopping cart' 
                            />
                        </figure>
                        <div className={totalInCart && 'header__cart-count'}>
                            {totalInCart !== 0 && totalInCart}
                        </div>
                </button>
                <figure className={isMobile ? 'header__avatar--smallscreen' : 'header__avatar--largescreen'}>
                    <img 
                        className='header__avatar-image' 
                        src={avatar} alt='user' 
                    />
                </figure>
            </div>
            <Cart 
                isMobile={isMobile}
                cartIsActive={cartIsActive}
                cartIsEmpty={cartIsEmpty}
                data={data}
                totalInCart={totalInCart}
                removeFromCart={removeFromCart}
                handleCheckout={handleCheckout}
            />
        </div>
    );
}
 
export default Header;