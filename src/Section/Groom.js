import React from 'react';
import './Groom.css';
import GroomImage from "../Assets/Groom.png";
import Header from '../Components/Header';
import { useEffect,useState } from 'react';

const Groom = () => {
  // Retrieve the form data from local storage
  const storedFormData = localStorage.getItem('formData');
  const formData = storedFormData ? JSON.parse(storedFormData) : null;
  const [familyData, setFamilyData] = useState(null);
  const [educationDetailsData, setEducationDetailsData] = useState(null);
  useEffect(() => {
    const storedEducationDetailsData = localStorage.getItem('educationData');
    const storedFamilyData = localStorage.getItem('familydata');

    if (storedEducationDetailsData) {
      setEducationDetailsData(JSON.parse(storedEducationDetailsData));
    }
    if (storedFamilyData) {
      setFamilyData(JSON.parse(storedFamilyData));
    }

  }, []);

  return (
    <div>
      <Header />
      <div className='Groom-section'>
        <div className="card">
          <img src={GroomImage} className="card-img-top" alt="Groom" />
          <div className="card-body">
            <h5 className="card-title">Groom Details</h5>
            {/* Display the relevant data from the form data */}
            <p>Name: {formData && formData.firstName} {formData && formData.lastName}</p>
            <p>Caste: {formData && formData.caste}</p>
            <p>Age / Height: {formData && formData.age} / {formData && formData.height}</p>
            <p>Education:{educationDetailsData && educationDetailsData.education}</p>
            <p>Occupation:{educationDetailsData && educationDetailsData.occupation}</p>
            <p>Minimum Annual Income:{educationDetailsData && educationDetailsData.income}</p>
            <p>Work Location:{educationDetailsData && educationDetailsData.worklocation}</p>
            <p>Native Place: {familyData && familyData.NativePlace}</p>
            <a href="/find/Female" className="btn btn-primary">Find Females</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groom;

