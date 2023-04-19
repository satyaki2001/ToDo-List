import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');


  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const fetchUserData = async () => {
      if(!token) return;
      try {
        const response = await axios.get("https://servicesv1.sangria.tech/user/getLoggedInUser",{
          headers: {
            tenant_identifier: "dotkonnekt",
            Authorization: `Bearer ${token}`,
        },
        });
        setUsername(response.data.Data[0].firstName);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className='Header'>
      <h1 className='heading'>
        <i className='fa-regular fa-pen-to-square'></i> To Do List
      </h1>
      <div className='user-info'>
      <span className='login-user-name'>Hi, {username}</span>
      <i
        onClick={handleLogout}
        title='LogOut?'
        className='fa-solid fa-right-from-bracket user-access'
        style={{ color: '#ebebeb' }}
      ></i>
      </div>
    </header>
  );
};

export default Header;