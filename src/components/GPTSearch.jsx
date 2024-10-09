import React, { useRef, useState } from 'react'
import Body from './Body'
import { useSelector } from 'react-redux'
import languageConfig from '../utils/languageConfig';
import openai from '../utils/OpenAI';

const GPTSearch = () => {

    const pageLang = useSelector(store=> store.appConfig.lang);
    const searchText = useRef(null);

    const fetchQueryData = async () => {
        const fetchedData = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: "Give me a list of 5 " + searchText.current.value + "in a comma separated manner as in example ahead i.e Golmaal,Kick,Sholay,1920,Haunted",
                },
            ],
        });
        console.log(fetchedData.choices);
    }

    const handleClick = () => {
        //fetchQueryData();
    }

  return (
    <div className='relative'>
        <Body/>
        <div className='absolute z-10 bg-black bg-opacity-30 mt-[10%] ml-[33%] w-1/3'>
            <form className='grid grid-cols-12' onSubmit={e=>e.preventDefault()}>
                <input type="text" placeholder={languageConfig[pageLang].searchPlaceholderText} className='col-span-9 p-3 m-2 rounded-lg bg-gray-600' ref={searchText}></input>
                <button className='col-span-3 bg-red-700 text-white rounded-md p-3 m-2 font-bold' onClick={handleClick}>{languageConfig[pageLang].search}</button>
            </form>
        </div>
    </div>
  )
}

export default GPTSearch