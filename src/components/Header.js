import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
      };

    return (
        <header className='Header'>
            <h1 className='heading'> <i className="fa-regular fa-pen-to-square"></i> To Do List</h1>
            <i onClick={handleLogout} class="fa-solid fa-right-from-bracket user-access" style={{color: "#ebebeb"}}></i>

        </header>
    );
};

export default Header;