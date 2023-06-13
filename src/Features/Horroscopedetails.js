import React, { useState,useEffect } from 'react';
import './Horoscope.css'

const Horoscope = () => {
  const rashi = ["Mesh (Aries)", "Vrushabh (Taurus)"];
  const gan = ["Dev Gan", "Manushya Gan", "Rakshas Gan", "I Dont Know"];
  const charan = ["One", "Two", "Three", "Four", "I Dont Know"];
  const nadi = ["Adhya", "Madhya", "Antya", "I Dont Know"];
  const nakshtra = ["Ashwini", "Bharani", "Krittika", "Rohini"];

  // Initialize state variables to hold the selected values
  const [selectedValues, setSelectedValues] = useState({
    rashi: '',
    gan: '',
    charan: '',
    nadi: '',
    nakshtra: '',
  });

  // Function to handle value change in the form
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    // Update the selected value state
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('horoscopeValues', JSON.stringify(selectedValues));
    console.log(selectedValues);
    setSelectedValues({
      rashi: '',
      gan: '',
      charan: '',
      nadi: '',
      nakshtra: '',
    });
  };
  
useEffect(() => {
  const storedValues = localStorage.getItem('horoscopeValues');
  if (storedValues) {
    setSelectedValues(JSON.parse(storedValues));
  }
}, []);

  return (
    <div className='horoscope-details'>
      <div className='heading'>
        <h2>Horoscope Details</h2>
      </div>
      <div className='horoscope-details-content'>
        <form className='detail-form'>
            <div className='form-group'>
              <label htmlFor='rashi'>Rashi</label><br/><br/>
              <select name='rashi' id='rashi' value={selectedValues.rashi} onChange={handleValueChange}>
                <option value=''>Select</option>
                {rashi.map((rashiOption) => (
                  <option key={rashiOption} value={rashiOption}>{rashiOption}</option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='gan'>Gan</label><br/><br/>
              <select id='gan' name='gan' value={selectedValues.gan} onChange={handleValueChange}>
<option value=''>Select</option>
{gan.map((ganOption) => (
  <option key={ganOption} value={ganOption}>{ganOption}</option>
))}
</select>

            </div>

            <div className='form-group'>
              <label htmlFor='charan'>Charan</label><br/><br/>
              <select id='charan' name='charan' value={selectedValues.charan} onChange={handleValueChange}>
                <option value=''>Select</option>
                {charan.map((charanOption) => (
                  <option key={charanOption} value={charanOption}>{charanOption}</option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='nadi'>Nadi</label><br/><br/>
              <select id='nadi' name='nadi' value={selectedValues.nadi} onChange={handleValueChange}>
                <option value=''>Select</option>
                {nadi.map((nadiOption) => (
                  <option key={nadiOption} value={nadiOption}>{nadiOption}</option>
                ))}
              </select>
            </div>
            <div className='profilegroup'>
              <label htmlFor='nakshtra'>Nakshtra</label><br/><br/>
              <select id='nakshtra' name='nakshtra' value={selectedValues.nakshtra} onChange={handleValueChange}>
                <option value=''>Select</option>
                {nakshtra.map((nakshtraOption) => (
                  <option key={nakshtraOption} value={nakshtraOption}>{nakshtraOption}</option>
                ))}
              </select>
            </div>
            <div className='personalsave'>
            <button className='save' type='submit'onClick={handleSubmit}>Save</button>
          </div>

          </form>
        </div>
      </div>

  );
};

export default Horoscope;
