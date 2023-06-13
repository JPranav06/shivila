import React from 'react';
import './Bride.css';
import Boy from "../Assets/Bride.png";
import Header from '../Components/Header';

const Bride = (props) => {
  const { personalDetailsData } = props;

  return (
    <div>
      <Header />
      <div className='Bride-section'>
        <div className="card">
          <img src={Boy} className="card-img-top" alt="Bride" />
          <div className="card-body">
            <h5 className="card-title">Bride Details</h5>
            {/* Display only the desired details */}
            <p>Name: {personalDetailsData?.firstName} {personalDetailsData?.lastName}</p>
            <p>Caste: {personalDetailsData?.caste}</p>
            <p>Age / Height: {personalDetailsData?.age} / {personalDetailsData?.height}</p>
            <p>Education: {personalDetailsData?.education}</p>
            <p>Occupation: {personalDetailsData?.occupation}</p>
            <p>Annual Income: {personalDetailsData?.annualIncome}</p>
            <p>Work Location: {personalDetailsData?.workLocation}</p>
            <p>Native Place: {personalDetailsData?.nativePlace}</p>
            <a href="/find/Male" className="btn btn-primary">Find Males</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bride;
