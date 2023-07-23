import '../styles/contact.css';


export const Contact = () => {
    return (
        <div className="container">
            <div className="row">                
            <h4>Contact us!</h4>
                <div className="input-group col-2">                                        
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
                <div className="mb-3 mail">
                    <label className="form-label">Email address:</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message:</label>
                    <textarea className="form-control" rows="6"></textarea>
                </div>
                <div className="item__btn">
                    <button type="button" className="btn btn-dark">Submit</button>
                </div>   
            </div>
            
        </div>
    );
}
