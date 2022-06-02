import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const SearchComp = () => {
    const [inputFocus, setInputFocus] = useState(false);


    const onFocusInput = () => {
        setInputFocus(true)
    }
    return (
        <div className="search  py-3 relative flex items-center  ">
            {
                inputFocus ? (

                    <FontAwesomeIcon icon={faArrowLeftLong} className={`absolute pl-3 duration-150 text-blue-600 cursor-pointer`} onClick={() => setInputFocus(false)} />
                ) : (
                    <FontAwesomeIcon icon={faSearch} className={`absolute pl-3 duration-150 text-gray-600`} />

                )
            }
            <input onFocus={onFocusInput} type="text" placeholder='Cari Chating' className="border px-10  w-full rounded-md focus:outline-none focus:border-gray-400 text-sm py-1 flex items-center bg-gray-100" />
            <FontAwesomeIcon icon={faBars} className={`cursor-pointer absolute pr-3 right-0 text-gray-600 duration-300 ${!inputFocus && 'scale-0'}`} />
        </div>
    )
}

export default SearchComp