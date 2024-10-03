import { Link } from "react-router-dom";
import HeaderLanguageAccordion from "./HeaderLanguageAccordion";

const Header = () => {
    return (
        <div className="flex justify-between bg-gradient-to-t from-transparent to-black px-[5%] absolute z-10">
            <div>
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className="w-1/4 bg-transparent" />
            </div>
            <div className="p-2 m-2 flex justify-around">
                <HeaderLanguageAccordion />
                <Link to="/login"><button className="bg-red-700 text-white rounded-md p-2 m-2 font-bold w-28 h-12">Sign In</button></Link>
            </div>
        </div>
    )
}

export default Header;