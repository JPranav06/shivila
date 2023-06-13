import React, { useEffect, useState } from 'react';
import './Details.css';
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();

  const [expectationData, setExpectationData] = useState(null);
  const [familyData, setFamilyData] = useState(null);
  const [educationDetailsData, setEducationDetailsData] = useState(null);
  const [personalDetailsData, setPersonalDetailsData] = useState(null);
  const [horoscopeData, setHoroscopeData] = useState(null); // Added state for horoscope data
  const storedValues = localStorage.getItem('horoscopeValues');
  const horoscopeValues = storedValues ? JSON.parse(storedValues) : null;

  useEffect(() => {
    // Retrieve form data from local storage
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
    // Update horoscope data when horoscopeValues change
    setHoroscopeData(horoscopeValues);
  }, [horoscopeValues]);

  const handleSubmit = () => {
    // Store personalDetailsData in local storage
    localStorage.setItem("personalDetails", JSON.stringify(personalDetailsData));

    if (personalDetailsData.gender === "Male") {
      navigate("/find/Female");
    } else {
      navigate("/find/Male");
    }
  };

  if (
    !expectationData ||
    !familyData ||
    !educationDetailsData ||
    !horoscopeData || // Update the condition to check for horoscopeData instead of horoscopeValues
    !personalDetailsData
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className='head'>
      <Header/>
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
              {/* Loop through the personalDetailsData object and display each field and its value */}
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
              {/* Loop through the expectationData object and display each field and its value */}
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
              {/* Loop through the familyData object and display each field and its value */}
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
              {Object.entries(horoscopeData).map(([field, value]) => ( // Update to use horoscopeData instead of horoscopeValues
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
