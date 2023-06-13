import React, { useState, useEffect, useCallback } from 'react';
import './Horoscope.css';

const Horoscope = () => {
  const rashi = ["Mesh (Aries)", "Vrushabh (Taurus)", "Mithun (Gemini)", "Karka (Cancer)", "Simha (Leo)", "Kanya (Virgo)", "Tula (Libra)", "Vrushchik (Scorpio)", "Dhanu (Sagittarius)", "Makar (Capricorn)", "Kumbh (Aquarius)", "Meen (Pisces)"];
  const gan = ["Dev Gan", "Manushya Gan", "Rakshas Gan", "I Dont Know"];
  const charan = ["One", "Two", "Three", "Four", "I Dont Know"];
  const nadi = ["Adhya", "Madhya", "Antya", "I Dont Know"];
  const nakshtra = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];

  // Initialize state variables to hold the selected values
  const [selectedValues, setSelectedValues] = useState({
    rashi: '',
    gan: '',
    charan: '',
    nadi: '',
    nakshtra: '',
    match: '',
    maglik: '',
    birthplace: '',
    birthtime: '',
    gotra: '',
    devak: '',
    yoni: ''
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    localStorage.setItem('horoscopeValues', JSON.stringify(selectedValues));
  }, [selectedValues]);

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
        <form className='detail-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='match'>Horoscope Match is Must</label><br /><br />
            <input type='radio' id='match-yes' name='match' value='yes' onChange={handleValueChange} checked={selectedValues.match === 'yes'} />
            <label htmlFor='match-yes'>Yes</label>
            <input type='radio' id='match-no' name='match' value='no' onChange={handleValueChange} checked={selectedValues.match === 'no'} />
            <label htmlFor='match-no'>No</label>
          </div>

          <div className='form-group'>
            <label htmlFor='maglik'>Are You Maglik?</label><br /><br />
            <input type='radio' id='maglik-yes' name='maglik' value='yes' onChange={handleValueChange} checked={selectedValues.maglik === 'yes'} />
            <label htmlFor='maglik-yes'>Yes</label>
            <input type='radio' id='maglik-no' name='maglik' value='no' onChange={handleValueChange} checked={selectedValues.maglik === 'no'} />
            <label htmlFor='maglik-no'>No</label>
          </div>

          <div className='form-group'>
            <label htmlFor='rashi'>Rashi</label><br /><br />
            <select name='rashi' id='rashi' value={selectedValues.rashi} onChange={handleValueChange}>
              <option value=''>Select</option>
              {rashi.map((rashiOption) => (
                <option key={rashiOption} value={rashiOption}>{rashiOption}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='birthplace'>Birth Place</label><br /><br />
            <input type='text' id='birthplace' name='birthplace' placeholder='Enter Birth Location City' value={selectedValues.birthplace} onChange={handleValueChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='birthtime'>Birth Time</label><br /><br />
            <input type='time' id='birthtime' name='birthtime' placeholder='hh:mm AM' value={selectedValues.birthtime} onChange={handleValueChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='gan'>Gan</label><br /><br />
            <select id='gan' name='gan' value={selectedValues.gan} onChange={handleValueChange}>
              <option value=''>Select</option>
              {gan.map((ganOption) => (
                <option key={ganOption} value={ganOption}>{ganOption}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='charan'>Charan</label><br /><br />
            <select id='charan' name='charan' value={selectedValues.charan} onChange={handleValueChange}>
              <option value=''>Select</option>
              {charan.map((charanOption) => (
                <option key={charanOption} value={charanOption}>{charanOption}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='gotra'>Gotra</label><br /><br />
            <input type='text' id='gotra' name='gotra' value={selectedValues.gotra} onChange={handleValueChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='nadi'>Nadi</label><br /><br />
            <select id='nadi' name='nadi' value={selectedValues.nadi} onChange={handleValueChange}>
              <option value=''>Select</option>
              {nadi.map((nadiOption) => (
                <option key={nadiOption} value={nadiOption}>{nadiOption}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='nakshtra'>Nakshtra</label><br /><br />
            <select id='nakshtra' name='nakshtra' value={selectedValues.nakshtra} onChange={handleValueChange}>
              <option value=''>Select</option>
              {nakshtra.map((nakshtraOption) => (
                <option key={nakshtraOption} value={nakshtraOption}>{nakshtraOption}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='devak'>Devak</label><br /><br />
            <input type='text' id='devak' name='devak' value={selectedValues.devak} onChange={handleValueChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='yoni'>Yoni</label><br /><br />
            <input type='text' id='yoni' name='yoni' value={selectedValues.yoni} onChange={handleValueChange} />
          </div>

          <div className='personalsave'>
            <button className='save' type='submit' onClick={handleSubmit}>Save</button>
          </div>
        </form>
      </div>
      <div className='reminder'>
        <h2>*Please Make Sure to Save before moving to the next Section*</h2>
      </div>
    </div>
  );
};

export default Horoscope;
