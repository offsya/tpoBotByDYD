import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";


const Header = ({orders, onDelete}) => {

    const [cartOpen, setCartOpen] = useState(false)




    const showOrders = (props) => {
        let summa = 0
        orders.forEach(el => summa += parseFloat(el.price))
        return(
            <div>
                {
                    orders.map(el => {
                        return(
                            <Order onDelete={onDelete} key={el.id} item={el}/>
                        )
                    })
                }
                <p className='summa'>Total: {summa.toFixed(2)}€</p>
            </div>
        )
    }

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Home</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className='shop-cart-button'/>
                {cartOpen && (
                    <div className='shop-cart'>
                        {orders.length > 0 ?
                            <div>
                                {showOrders()}
                            </div>
                            :

                            <div className='empty'>
                                <h2>Товаров нет</h2>
                            </div>
                        }
                    </div>
                )}

            </div>
            <div className='presentation'></div>
        </header>
    );
};

export default Header;