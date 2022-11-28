import React, {useState} from 'react';

const Categories = ({chooseCategory}) => {
    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'All'
        },
        {
            key: 'apple',
            name: 'Apple'
        },
        {
            key: 'orange',
            name: 'Orange'
        }
    ])

    return (
        <div className='categories'>
            {categories.map(el => {
                return(
                    <div onClick={() => {chooseCategory(el.key)}} key={el.key}>
                        {el.name}
                    </div>
                )
            })}
        </div>
    );
};

export default Categories;