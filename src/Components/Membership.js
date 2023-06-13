import React from 'react';
import './Membership.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import three from '../Assets/300.png';
import mark from '../Assets/mark.png';
import Notice from './Notice';

const Membership = () => {
  return (
    <div className='membership-container'>
      <div className='free'>
        <div className='image-container'>
          <img src={three} alt='no pic' />
        </div>
        <div className='content'>
          <h3>Membership Fee (One-time)</h3>
          <p>
            We strongly believe in helping people to find their life partner. However, we don't provide any Free membership to avoid fake profiles and non-serious members on our portal. All profiles listed here are 100% verified by our Vadhu Var Suchak Kendra staff.<br /><br /><br />
            We only charge one-time <span className='span'>₹ 300</span> for unlimited access. (This is the only package we have.)<br /><br />
            Thank You!
          </p>
        </div>
      </div>
      <div className='benefits'>
        <div className='image-container'>
          <img src={mark} alt='no pic' />
        </div>
        <div className='content'>
          <h3>Membership Benefits</h3>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} /> No <span className='span'>Fake Profiles</span>, no one like theme.<br /><br />
            <FontAwesomeIcon icon={faCircleCheck} /> Once you register profile you get <span className='span'>Unlimited Access</span> to all profiles available on the website.<br /><br />
            <FontAwesomeIcon icon={faCircleCheck} /> We only have <span className='span'>One Package</span>. No such things like Silver, Golden or Diamond.<br /><br />
            <FontAwesomeIcon icon={faCircleCheck} /> Instant access to Members <span className='span'>Contact Details</span>.<br /><br />
            <FontAwesomeIcon icon={faCircleCheck} /> Premium <span className='span'>Live Chat</span> with other members.<br />
          </p>
        </div>
      </div>
      <Notice />
    </div>
  );
}

export default Membership;
