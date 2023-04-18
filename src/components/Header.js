import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://servicesv1.sangria.tech/user/getLoggedInUser", {
          headers: { Authorization: localStorage.getItem('access_token') },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className='Header'>
      <h1 className='heading'>
        <i className='fa-regular fa-pen-to-square'></i> To Do List
      </h1>
      {user && <p>hello{user.name}</p>}
      <i
        onClick={handleLogout}
        title='LogOut?'
        className='fa-solid fa-right-from-bracket user-access'
        style={{ color: '#ebebeb' }}
      ></i>
    </header>
  );
};

export default Header;