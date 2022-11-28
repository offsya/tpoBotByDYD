import './App.css';
import React, {useState} from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'title',
            img: 'w2.jpeg',
            desc: 'description',
            category: 'apple',
            price: '49.99'
        },
        {
            id: 2,
            title: 'title',
            img: 'w3.jpeg',
            desc: 'description',
            category: 'apple',
            price: '49.99'
        },
        {
            id: 3,
            title: 'title',
            img: 'w4.jpeg',
            desc: 'description',
            category: 'apple',
            price: '49.99'
        },
        {
            id: 4,
            title: 'title',
            img: 'w5.jpeg',
            desc: 'description',
            category: 'apple',
            price: '49.99'
        },
        {
            id: 5,
            title: 'title',
            img: 'w6.jpeg',
            desc: 'description',
            category: 'apple',
            price: '49.99'
        },
        {
            id: 6,
            title: 'title',
            img: 'w6.jpeg',
            desc: 'description',
            category: 'orange',
            price: '49.99'
        },
        {
            id: 7,
            title: 'title',
            img: 'w6.jpeg',
            desc: 'description',
            category: 'orange',
            price: '49.99'
        },
        {
            id: 8,
            title: 'title',
            img: 'w3.jpeg',
            desc: 'description',
            category: 'orange',
            price: '49.99'
        },
        {
            id: 9,
            title: 'title',
            img: 'w2.jpeg',
            desc: 'description',
            category: 'orange',
            price: '49.99'
        },
    ])
    const [orders, setOrders] = useState([])
    const [curretItems, setCurretItems] = useState(items)
    const [showFullItem, setShowFullItem] = useState(false)
    const [fullItem, setFullItem] = useState({})


    const addToOrder = (item) => {
        let isInArray = false;
        orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray){
            setOrders([...orders, item]);
        }
        console.log(orders)
    }

    const deleteOrder = (id) => {
        setOrders(() => {
            return orders.filter(e => e.id !== id)
        })

    }

    const chooseCategory = (category) => {
        if(category === 'all'){
            setCurretItems(items)
        }else{
            setCurretItems(items.filter(el => el.category === category))
        }
    }

    const onShowItem = (item) => {
        setFullItem(item)
        setShowFullItem(!showFullItem);
    }
    //lol
    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder}/>
            <Categories chooseCategory={chooseCategory}/>

            <Items onShowItem={onShowItem} items={curretItems} onAdd={addToOrder}/>
            {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
            <Footer/>
        </div>
    );
}

export default App;
