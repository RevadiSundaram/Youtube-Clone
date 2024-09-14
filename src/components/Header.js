import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { CiSearch } from "react-icons/ci";
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
   
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        }, 200);
        
        return () => {
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        console.log(json[1]);

        //updates cache
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }



    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (

    <div className='grid grid-flow-col shadow-lg p-2 items-center '>
        <div className='flex items-center col-span-1 gap-5'>
            <GiHamburgerMenu className='cursor-pointer' size={30} onClick={() => toggleMenuHandler()} />
                <img alt="menu" className='h-20' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' />
            
        </div>

        <div className='col-span-10 px-20'>
            <div>
                <input className='px-5 py-2 w-1/2 border border-gray-400 rounded-l-full'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                type='text' />

                <button className='border border-gray-400 py-2 px-4 rounded-r-full shadow-md'>🔍 </button>
            </div>
            {
                showSuggestions && (
                    <div className='absolute border border-gray-100 bg-white py-2 px-5 w-[27rem] rounded-lg'>
                <ul>
                    {suggestions.map(sug => (
                        <li key={sug} className='px-3 py-1 flex items-center hover:bg-gray-200 gap-1 cursor-pointer'><CiSearch /> {sug}</li>
                    ))}
                </ul>
            </div>
                )
            }
            
        </div>
        <div>
        <FaUserCircle size={30} />
        </div>
         
    </div>
  )
}

export default Header