import React from 'react';

const ShowFullItem = ({item, onAdd, onShowItem}) => {
    return (
        <div className='full-item'>
            <div>
                <img alt={item.title} src={"./img/" + item.img} onClick={onShowItem}/>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
            </div>
        </div>
    );
};

export default ShowFullItem;