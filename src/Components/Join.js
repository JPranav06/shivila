import React from 'react'
import './Join.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <button className='join' onClick={handleClick}>Join Free Today <FontAwesomeIcon icon={faCircleChevronRight} /></button>
  )
}

export default Join