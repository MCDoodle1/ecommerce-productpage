import '../sass/style.css';
import close from '../assets/images/icon-close.svg';
import menu from '../assets/images/icon-menu.svg';
import logo from '../assets/images/logo.svg';

const Menu = ( {menuIsActive, activateMenu, isMobile, renderMenuItems} ) => {
    
    return (
        <>
            {!isMobile && (      
            <>
            <figure className='header__logo'>
            <img className='header__logo-image' src={logo} alt='Sneakers logo' />
            </figure>
            {renderMenuItems()}
            </>)}
            {isMobile && !menuIsActive && (
            <>
            <button className='header__menu-button' onClick={activateMenu}>
                <figure>
                    <img className='header__menu-button-image' src={menu} alt='open the menu' />
                </figure> 
            </button> 
            <figure className='header__logo'>
            <img className='header__logo-image' src={logo} alt='Sneakers logo' />
            </figure>
            </>
            )}
            {isMobile && menuIsActive && (
            <>
            <button className='header__menu-button' onClick={activateMenu}>
                <figure>
                    <img className='header__menu-button-image' src={close} alt='close the menu' />
                </figure> 
            </button>
            {renderMenuItems()}
            </>
            )}
            </>
    
    )
}
 
export default Menu;