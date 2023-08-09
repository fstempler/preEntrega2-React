import '../styles/contact.css';
import { useCartContext } from "../state/Cart.context";
import { useState } from 'react';
import { addOrder } from '../lib/orders.requests';
import { updateManyRecords } from '../lib/records.requests';



export const CartForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('')

    const { cart, getTotalPrice, cleanCart } = useCartContext();
    const items = cart.map(({id, title, artist, qty, price})=> ({id, title, artist, qty, price}));

    const createOrder = async () => {
        const order = {
            buyer: {firstName, lastName, phone, email},
            items,
            total: getTotalPrice(),
        };
        const id = await addOrder( order );
        await updateManyRecords(items);
        cleanCart();
        //Ponerlo pantalla emergente con el detalle del pedido y el ID
        console.log(id);
        
    }

    return (
        <div className="container">
            <div className="row">                
            <h4>Approve your order</h4>
            <span className="total">Total: ${getTotalPrice().toLocaleString("es-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
            {
            cart.map((item) => <div className="itemContainer container text-center" key={item.id}>
                <div className="row align-items-start">
                              
                <div className="infoContainer col">
                    <span className="title">{item.title}</span>
                    <span>{item.artist}</span>
                    <span>${item.price}</span>
                    <span>Quantity: {item.qty}</span>
                    <span>Total: ${(item.qty * item.price).toFixed(2).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>                
                </div>
                </div>)
        }        
            </div>
            <form className='row g-3 needs-validation' noValidate>
                <div className=" col-md-4">                                        
                    
                <label htmlFor="validationCustom02" className="form-label"> First Name </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="validationCustom02" 
                    aria-label="First name" 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required />
                    <label htmlFor="validationCustom02" className="form-label">Last name </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="validationCustom02" 
                    aria-label="Last name" 
                    onChange={(e) => setLastName(e.target.value)} 
                    required />                    
                </div>
                <div className="mb-3 mail">
                    <label className="form-label">Email address:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                
                <div className="mb-3 mail">
                    <label className="form-label">Confirm Email address:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    onChange={(e) => setConfirmEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-3 mail">
                    <label className="form-label">Phone</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="+54 9 11 1234 5678" 
                    onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
                <div className="item__btn">
                    <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={createOrder}>
                        Submit
                    </button>
                </div>           
            </form>
                
            
        </div>
    );
}
