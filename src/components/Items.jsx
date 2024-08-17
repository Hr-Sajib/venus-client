import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        axios.get('../../public/data.json')
        .then(r =>{
            setItems(r.data);
        })
    },[])

// console.log(items)
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                {
                    items.map(item => <Item item={item} key={item.name}></Item>)
                }
            </div>
            
        </div>
    );
};

export default Items;

const Item =({item})=>{
    console.log(item)

    return(
        <div className="border lg:p-3 bg-gray-200 rounded-xl">
            <img src={item.image} className='rounded-xl  h-[200px] w-[200px] object-cover' alt="Image Loading" />
            <div className="text-left">
                <p className="text-2xl mt-2">{item.name}</p>
                <p className="mb-2">{item.category}</p>
                <p>{item.description}</p>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-1 items-center">
                        <p>★</p>
                        <p>{item.ratings}</p>
                    </div>
                    <p className="text-xl">${item.price}</p>
                </div>
            </div>
        </div>
    )
}
