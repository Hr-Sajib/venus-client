import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from './Pagination'; // Import the Pagination component


const Items = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 9; // Number of articles to show per page


    useEffect(()=>{
        axios.get('../../public/data.json')
        .then(r =>{
            setItems(r.data);
        })
    },[])


    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = items.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(items.length / articlesPerPage);


    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                {
                    currentArticles.map(item => <Item item={item} key={item.name}></Item>)
                }

            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
        </div>
    );
};

export default Items;

const Item =({item})=>{
    console.log(item)

    return(
        <div className="border flex flex-col justify-between lg:p-3 bg-gray-200 rounded-xl h-[35rem]">
            <img src={item.image} className='rounded-xl  h-[60%] w-[100%] object-cover' alt="Image Loading" />
            <div className="text-left ">
                <p className="text-2xl mt-2">{item.name}</p>
                <p className="mb-5">{item.category}</p>
                <p>{item.description}</p>
            </div>
            <div className="flex justify-between mt-4 ">
                <div className="flex gap-1 items-center">
                    <p>★</p>
                    <p className="font-bold">{item.ratings}</p>
                </div>
                <p className="text-xl font-bold">${item.price}</p>
            </div>
        </div>
    )
}
