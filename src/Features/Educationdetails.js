import React, { useState } from 'react';
import './Educationdetails.css';

const Educationdetails = () => {
  const [income, setIncome] = useState(0);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [isNRI, setIsNRI] = useState('');

  const handleIncomeChange = (e) => {
    setIncome(parseInt(e.target.value));
  };

  const handleEducationChange = (e) => {
    setSelectedEducation(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleWorkLocationChange = (e) => {
    setWorkLocation(e.target.value);
  };

  const handleNRICheckboxChange = (e) => {
    setIsNRI(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      education: selectedEducation,
      occupation: occupation,
      income: income,
      workLocation: workLocation,
      isNRI: isNRI,
    };

    // Store the form data in localStorage
    localStorage.setItem('educationData', JSON.stringify(formData));
    console.log(formData)

    // Clear the form fields
    setSelectedEducation('');
    setOccupation('');
    setIncome(0);
    setWorkLocation('');
    setIsNRI('');
  };

  const educationdetails = [
    'Doctor',
    'Engineer',
    'Advocate',
    'Software Engineer/Developer',
    // Rest of the options...
  ];

  return (
    <div className='education-details'>
      <div className='heading'>
        <h2>Education Details</h2>
      </div>
      <div className='education-details-content'>
        <form className='detailform' onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor='educationdetails'>Education</label>
            <br />
            <br />
            <select
              name='educationdetails'
              id='educationdetails'
              value={selectedEducation}
              onChange={handleEducationChange}
            >
              <option value=''>Select</option>
              {educationdetails.map((education, index) => (
                <option key={index} value={education}>
                  {education}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='occupation'>Occupation</label>
            <br />
            <br />
            <input
              type='text'
              name='occupation'
              id='occupation'
              placeholder='Doctor, Student, Farming'
              value={occupation}
              onChange={handleOccupationChange}
            />
          </div>
          <div className='form-group'>
            <label>Minimum Annual Income</label> <br />
            <br />
            <div className='income-input'>
              <input
                type='number'
                id='income'
                name='income'
                value={income}
                onChange={handleIncomeChange}
              />
              <button className='rupees'>₹</button>
            </div>
          </div>
          <div className='profilegroupedu'>
            <label htmlFor='worklocation'>Work Location</label>
            <br />
            <br />
            <input
              type='text'
              name='worklocation'
              id='worklocation'
              placeholder='Enter Your Work Location'
              value={workLocation}
              onChange={handleWorkLocationChange}
            />
          </div>
          <div className='profilegroup1edu'>
            <label htmlFor='nri'>NRI</label>
            <br />
            <br />
            <div>
              <label>
                <input
                  type='radio'
                  name='nri'
                  value='yes'
                  checked={isNRI === 'yes'}
                  onChange={handleNRICheckboxChange}
                />
                Yes
              </label>
              <label>
                <input
                  type='radio'
                  name='nri'
                  value='no'
                  checked={isNRI === 'no'}
                  onChange={handleNRICheckboxChange}
                />
                No
              </label>
            </div>
          </div>
          <div className='personalsave'>
              <button className='save' type='submit'>Save</button>
            </div>
        </form>
      </div>
      <div className='reminder'>
        <h2>*Please Make Sure to Save before moving to the next Section*</h2>
        </div>
    </div>
  );
};

export default Educationdetails;
