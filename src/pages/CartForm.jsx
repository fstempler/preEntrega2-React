import '../styles/contact.css';
import { useCartContext } from "../state/Cart.context";
import { useState } from 'react';
import { addOrder } from '../lib/orders.requests';
import { updateManyRecords } from '../lib/records.requests';
import { NavLink } from "react-router-dom";
import '../styles/cartForm.css';



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
        alert(id);
        console.log(id);
                                             
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        createOrder();
    };

    const validateForm = () => {
        // Validaciones
        if (firstName.trim() === '') {
            alert('First Name is required');
            return false;
        }

        if (lastName.trim() === '') {
            alert('Last Name is required');
            return false;
        }

        if (email.trim() === '') {
            alert('Email is required');
            return false;
        }

        if (email !== confirmEmail) {
            alert('Emails do not match');
            return false;
        }

        if (!phone.match(/^\+?\d+$/)) {
            alert('Invalid Phone number');
            return false;
        }

        

        return true;
    };

    return (
        <div className="container row mainContainer">
            <div className='d-flex justify-content-center confirm'>
                <h4 className='confirmationText'>Confirm your order</h4>                
            </div>
            <hr />
            {/* COL IZQUIERDA */}
            <div className='col-md-6 col-sm-12'>         
                <span className="total mb-1">Total: ${getTotalPrice().toLocaleString("es-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
            <hr />
            {
            cart.map((item) => 
            <div className="container" key={item.id}>
                <div className="align-items-start">                              
                    <div className="d-flex flex-column mb-3">
                        <span className="title">{item.title}</span>
                        <span>{item.artist}</span>
                        <span>${item.price}</span>
                        <span>Quantity: {item.qty}</span>
                        <span>Total: ${(item.qty * item.price).toFixed(2).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>                
                </div>
            </div>
            )
        }   
            
                 
            </div>

            {/* COL DERECHA */}
            <div className='col-md-6 col-sm-12'>
            <form className='g-3' noValidate onSubmit={handleSubmit}>
                <div className="col">                                        
                    <label className="form-label"> First Name </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required />
                    <label className="form-label">Last name </label>
                    <input 
                    type="text" 
                    className="form-control"                     
                    onChange={(e) => setLastName(e.target.value)} 
                    required />                    
                </div>
                <div className="col">
                    <label className="form-label">Email address:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                
                <div className="col">
                    <label className="form-label">Confirm Email address:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    onChange={(e) => setConfirmEmail(e.target.value)} 
                    />
                </div>
                <div className="col">
                    <label className="form-label">Phone</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    placeholder="+54 9 11 1234 5678" 
                    onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
                    
            </form>
            
            </div>
                
            <div className="item__btn d-flex justify-content-center">
                <NavLink to={"/"} className="nav-link"> 
                    <button 
                        type="submit" 
                        className="btn btnConfirm"
                        onClick={handleSubmit}>
                        Confirm Order
                    </button>
                </NavLink>
            </div>       
            
            
                
            
        </div>
    );
}
