
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../state/Cart.context';
import './cartWidget.css';
import { useState } from 'react';

// const CartWidget = () => {    
//       const {getCartQty} = useCartContext();
//       const navigate = useNavigate();
//       return (
//         <div className="cart" onClick={ () => navigate("/cart")}>
//           {getCartQty() ? <h5 className="cartWidget">({getCartQty()})</h5> : null}
//           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-cart2 ms-2 mb-2" viewBox="0 0 16 16">
//             <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
//           </svg>
//         </div> 
//     )
// }


//---------Código Nuevo-------

const CartWidget = () => {
  const { getCartQty, cart } = useCartContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen (true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='cart'
    onClick={() => navigate("/cart")}
    onMouseEnter={openDropdown}
    onMouseLeave={closeDropdown}
    >
      <h5 className='cartWidget'>({getCartQty()})</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-cart2 ms-2 mb-2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
      {isDropdownOpen && (
        <div className='content'>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.artist} - {item.title}</span>
              <span>Quantity: {item.qty}</span>
            </div>              
          ))}
        </div>  
      )}
    </div>
  )
}

export default CartWidget