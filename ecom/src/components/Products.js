import React from 'react';
import './Products.css';

function Products(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.url} alt="" />
                {/* {console.log(props.url)} */}
            </div>
            <div className="card-content">
                <h3>{props.title}</h3>
                
                <div className="price">
                    <p>₹{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Products
