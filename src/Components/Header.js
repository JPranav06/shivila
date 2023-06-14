import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/find/Female');
  };

  const handleClicks = () => {
   navigate('/find/Male');
  };

  return (
    <div className='header'>
      <h2>
        <Link to='/shivila'>Vadhu Var Suchak Kendra</Link>
      </h2>
      <ul className='list'>
        <li>
          <h5 className='link' onClick={handleClick}>
            Brides
          </h5>
        </li>
        <li>
          <h5 className='link' onClick={handleClicks}>
            Grooms
          </h5>
        </li>
        <li>
          <h5>
            <Link to='/login' className='login-link'>
              Login<FontAwesomeIcon icon={faRightToBracket} style={{marginLeft:'0.5em'}} />
            </Link>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Header;
