import React from 'react'
import './Join.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';

const Join = () => {
  return (
    <button className='join'>Join Free Today <FontAwesomeIcon icon={faCircleChevronRight} /></button>
  )
}

export default Join