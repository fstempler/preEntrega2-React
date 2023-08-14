import '../styles/contact.css';
import { useCartContext } from "../state/Cart.context";
import { useState } from 'react';
import { addOrder } from '../lib/orders.requests';
import { updateManyRecords } from '../lib/records.requests';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/cartForm.css';



export const CartForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('')
    
    const { cart, getTotalPrice, cleanCart } = useCartContext();
    const items = cart.map(({id, title, artist, qty, price})=> ({id, title, artist, qty, price}));
    
    const navigate = useNavigate();

    const createOrder = async () => {
        
        if (cart.length == 0 ){
            toast.error('🤨 Cart is empty!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });          
        }else{
        const order = {
            buyer: {firstName, lastName, phone, email},
            items,
            total: getTotalPrice(),
        };
        const id = await addOrder( order );
        await updateManyRecords(items);
        cleanCart();
        
        toast.info(id,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            onClose: navigate('/'),
            });
        
        
                                             
    }
}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        createOrder();
    };
    //Función para validar email
    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email)
    }
    // Validaciones
    const validateForm = () => {
        
        if (firstName.trim() === '') {
            toast.error('🤨 First Name is required!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });            
            return false;
        }

        if (lastName.trim() === '') {            
            toast.error('🤨 Last Name is required', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }

       

        if (email.trim() === '') {            
            toast.error('🤨 Email is required', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }

        if (!isEmailValid(email)) {            
            toast.error('🤨 Invalid Email ', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }

        if (email !== confirmEmail) {            
            toast.error('🤨 Emails do not match', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }

        if (!phone.match(/^\+?\d+$/)) {            
            toast.error('🤨 Invalid Phone number', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }

        

        return true;
    };

    return (
        <div className="container row mainContainer">                        
            
            <div className='d-flex justify-content-center confirm'>
            <span className="total mb-1">Total: ${getTotalPrice().toLocaleString("es-US",{minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
            </div>
            <hr />

            {/* Order detail */}
            <div className='col-md-6 col-sm-12'>                         
            {
            cart.map((item) => 
            <div className="itemContainer" key={item.id}>
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

            {/* Confirmation Form */}
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
                    <button 
                        type="submit" 
                        className="btn btnConfirm"
                        onClick={handleSubmit}>
                        Confirm Order
                    </button>                
            </div>       
            
            
                
            
        </div>
    );
}
