import '../sass/style.css';
import bin from '../assets/images/icon-delete.svg';


const Cart = ( {
    isMobile,
    data,
    cartIsActive, 
    cartIsEmpty, 
    totalInCart, 
    removeFromCart,
    handleCheckout } ) => {

    const totalAmount = data.netPrice * totalInCart
    
    return (
        
        cartIsActive && (
            <div className={isMobile? 'cart' : 'cart cart-largescreen'}>
                <div className={isMobile? 'cart__title' : 'cart__title cart__title-largescreen'}>Cart</div>
                {cartIsEmpty ?
                <div className={isMobile? 'cart__content' : 'cart__content cart__content-largescreen'}>
                    <p className='cart__content-text--empty'>Your cart is empty.</p> 
                </div> :
                <div className={isMobile? 'cart__content' : 'cart__content cart__content-largescreen'}>
                    <img src={data.images[0].thumbnailUrl} alt='product in cart' className='cart__content-image' />
                    <div className='cart__content-text'>
                        <span className='cart__content-text--light'>{data.name}</span>

                         <p><span className='cart__content-text--light'>  {`$${data.netPrice.toFixed(2)} x ${totalInCart}`}</span> 
                            <span>{` $${totalAmount.toFixed(2)}`}</span>
                        </p>
                    </div>
                    <button onClick={removeFromCart}>
                        <figure>
                            <img src={bin} alt='' />
                        </figure>
                    </button>
                    <button className='cart__content-checkout' onClick={handleCheckout}>
                       Checkout 
                    </button>
                </div>}
            </div>
        )
    )
};

export default Cart;

