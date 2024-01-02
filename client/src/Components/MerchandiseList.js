import React from "react";
import './MerchandiseList.css';

const MerchandiseList = ({ items }) => {
    return ( 
        <div className="merchandise-list">
            <h2>Merchandise</h2>
            {items.map(item => (
                <div key={item.id} className="merchandise item">
                    <img src={item.imageUrl} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default MerchandiseList;