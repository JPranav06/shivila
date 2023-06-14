import React, { useEffect, useState } from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();

  const [expectationData, setExpectationData] = useState(null);
  const [familyData, setFamilyData] = useState(null);
  const [educationDetailsData, setEducationDetailsData] = useState(null);
  const [personalDetailsData, setPersonalDetailsData] = useState(null);
  const [horoscopeData, setHoroscopeData] = useState(null);
  const storedValues = localStorage.getItem('horoscopeValues');
  const horoscopeValues = storedValues ? JSON.parse(storedValues) : null;

  useEffect(() => {
    const storedExpectationData = localStorage.getItem('expectationData');
    const storedFamilyData = localStorage.getItem('familydata');
    const storedEducationDetailsData = localStorage.getItem('educationData');
    const storedPersonalDetailsData = localStorage.getItem('formData');

    if (storedExpectationData) {
      setExpectationData(JSON.parse(storedExpectationData));
    }
    if (storedFamilyData) {
      setFamilyData(JSON.parse(storedFamilyData));
    }
    if (storedEducationDetailsData) {
      setEducationDetailsData(JSON.parse(storedEducationDetailsData));
    }
    if (storedPersonalDetailsData) {
      setPersonalDetailsData(JSON.parse(storedPersonalDetailsData));
    }
  }, []);

  useEffect(() => {
    setHoroscopeData(horoscopeValues);
  },// eslint-disable-next-line
  []);

  const handleSubmit = () => {
    localStorage.setItem('personalDetails', JSON.stringify(personalDetailsData,expectationData,familyData,educationDetailsData,horoscopeData));
    console.log(personalDetailsData,expectationData,familyData,educationDetailsData,horoscopeData)

    if (personalDetailsData.gender === 'Male') {
      navigate('/find/Female');
    } else {
      navigate('/find/Male');
    }

  };

  if (
    !expectationData ||
    !familyData ||
    !educationDetailsData ||
    !horoscopeData ||
    !personalDetailsData
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className='head'>
      <div className='details'>
        <div className='details-content'>
          <button onClick={handleSubmit}>Save and Move</button>

          <div className='tableheading'>
            <h2>Personal Details</h2>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(personalDetailsData).map(([field, value]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='tableheading'>
            <h2>Expectations</h2>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(expectationData).map(([field, value]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='tableheading'>
            <h2>Family Details</h2>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(familyData).map(([field, value]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='tableheading'>
            <h2>Education Details</h2>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(educationDetailsData).map(([field, value]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='tableheading'>
            <h2>Horoscope Details</h2>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(horoscopeData).map(([field, value]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
