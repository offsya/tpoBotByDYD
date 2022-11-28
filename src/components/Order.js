import React from 'react';
import {FaTrash} from "react-icons/fa";

const Order = ({item, onDelete}) => {
    return (
        <div className='item'>
            <img alt={item.title} src={"./img/" + item.img}/>
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <FaTrash onClick={() => onDelete(item.id)} className='delete-icon'/>
        </div>
    );
};

export default Order;