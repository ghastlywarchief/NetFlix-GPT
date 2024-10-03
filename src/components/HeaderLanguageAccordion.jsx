import { useState } from "react";

const HeaderLanguageAccordion = () => {

    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
        setShowDiv(!showDiv);
    }

    return (
        <div className="p-2">
            <div className="bg-transparent text-white flex justify-between  px-8 py-2 focus:border-2 border border-white" onClick={handleClick}>
                <h1 className="text-lg">English</h1>
            </div>
            <div className="items-center">
                {
                    (showDiv) && 
                    (<div className="absolute items-center">
                        <ul className="bg-white text-black px-9">
                            <li className=" hover:bg-blue-600 hover:text-white hover:w-full">English</li>
                            <li className=" hover:bg-blue-600 hover:text-white">Hindi</li>
                        </ul>
                    </div>)
                }
            </div>
            
        </div>
        
    )
}

export default HeaderLanguageAccordion;