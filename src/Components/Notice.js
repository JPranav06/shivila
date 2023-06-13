import React from 'react';
import './Notice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Notice = () => {
  return (
    <div className='notice'>
      <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'red' }} /> <span className='span'>Important Notice:</span> We found out that other fake <span className='span'>Matrimony Services</span> using our name to run a scam, these scammers ask people to deposit money into their bank account to find a suitable match for them. Please don't fall victim to this scam and don't deposit any amount into their account. If you get such a call, then consider reporting it to the nearest police station.
      <br/><br/>
      We only charge a one-time fee of <span className='span'>₹ 300</span> for unlimited access, and you can only make a payment online on our website. Thank You!
    </div>
  );
}

export default Notice;
