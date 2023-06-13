import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { storeFamilyDetails } from '../Stores/FamilyDetailsActions';
import './FamilyDetails.css';
import { useNavigate } from 'react-router-dom';

const FamilyDetails = ({ familyDetails }) => {
   // eslint-disable-next-line no-unused-vars   
  const [familydata, setFamilyData] = useState({});

  useEffect(() => {
   // Retrieve form data from local storage
   const storedData = localStorage.getItem('familydata');
   if (storedData) {
     setFamilyData(JSON.parse(storedData));
   }
 }, []);

  const [MarriedSisters, setMarriedSisters] = useState(0);
  const [UnmarriedSisters, setUnMarriedSisters] = useState(0);
  const [MarriedBrothers, setMarriedBrothers] = useState(0);
  const [UnmarriedBrothers, setUnMarriedBrothers] = useState(0);
  const [FatherAlive, setFatherAlive] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [FatherOccupation, setFatherOccupation] = useState('');
  const [MotherAlive, setMotherAlive] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [MotherOccupation, setMotherOccupation] = useState('');
  const [ParentsLivingTogether, setParentsLivingTogether] = useState('');
  const [InterCastMarriage, setIntercastMarriage] = useState('');
  const [MamasName, setMamasName] = useState('');
  const [NativePlace, setNativePlace] = useState('');
  const [FamilyWealth, setFamilyWealth] = useState('');
  const [CurrentLocation, setCurrentLocation] = useState('');
  const [RelativesSurname, setRelativesSurname] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMarriedSisters = (e) => {
    setMarriedSisters(parseInt(e.target.value));
  };

  const handleUnMarriedSisters = (e) => {
    setUnMarriedSisters(parseInt(e.target.value));
  };

  const handleMarriedBrothers = (e) => {
    setMarriedBrothers(parseInt(e.target.value));
  };

  const handleUnMarriedBrothers = (e) => {
    setUnMarriedBrothers(parseInt(e.target.value));
  };

  const handleFatherAlive = (e) => {
    setFatherAlive(e.target.value);
  };

  const handleFatherName = (e) => {
    setFatherName(e.target.value);
  };

  const handleFatherOccupation = (e) => {
    setFatherOccupation(e.target.value);
  };

  const handleMotherAlive = (e) => {
    setMotherAlive(e.target.value);
  };

  const handleMotherName = (e) => {
    setMotherName(e.target.value);
  };

  const handleMotherOccupation = (e) => {
    setMotherOccupation(e.target.value);
  };

  const handleParentsLivingTogether = (e) => {
    setParentsLivingTogether(e.target.value);
  };

  const handleIntercastMarriage = (e) => {
    setIntercastMarriage(e.target.value);
  };

  const handleMamasName = (e) => {
    setMamasName(e.target.value);
  };

  const handleNativePlace = (e) => {
    setNativePlace(e.target.value);
  };

  const handleFamilyWealth = (e) => {
   setFamilyWealth(e.target.value);
 };

 const handleCurrentLocation = (e) => {
   setCurrentLocation(e.target.value);
 };

 const handleRelativesSurname = (e) => {
   setRelativesSurname(e.target.value);
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   // Create an object with the form data
   const data = {
     MarriedSisters,
     UnmarriedSisters,
     MarriedBrothers,
     UnmarriedBrothers,
     FatherAlive,
     FatherName,
     FatherOccupation,
     MotherAlive,
     MotherName,
     MotherOccupation,
     ParentsLivingTogether,
     InterCastMarriage,
     MamasName,
     NativePlace,
     FamilyWealth,
     CurrentLocation,
     RelativesSurname,
   };
   navigate('/profile/create');
   localStorage.setItem('familydata', JSON.stringify(data));
   console.log(data)
   dispatch(storeFamilyDetails(data));
 };

return (
<div className='family-details'>
   <div className='heading'>
      <h2>Family Details</h2>
   </div>
   <div className='family-details-content'>
   <form className='detailform' onSubmit={handleSubmit}>
         <div className='form-group'>
            <label htmlFor='fatheralive'>Father Alive</label><br/><br/>
            <div>
               <label>
               <input type='radio' name='fatheralive' value='yes' onChange={handleFatherAlive} />
               Yes
               </label>        <label>
               <input type='radio' name='fatheralive' value='no' onChange={handleFatherAlive}/>
               No
               </label>
            </div>
         </div>
         <div className='form-group'>
            <label htmlFor='fathername'>Father Name</label><br/><br/>
            <input type='text' name='fathername' id='fathername' placeholder='Father Full Name' onChange={handleFatherName}/>
         </div>
         <div className='form-group'>
            <label htmlFor='fatheroccupation'>Father Occupationn</label><br/><br/>
            <input type='text' name='fatheroccupation' id='fatheroccupation' placeholder='Doctor,Farming' onChange={handleFatherOccupation}/>
         </div>
         <div className='form-group'>
            <label htmlFor='motheralive'>Mother Alive</label><br/><br/>
            <div>
               <label>
               <input type='radio' name='motheralive' value='yes'onChange={handleMotherAlive} />
               Yes
               </label>        <label>
               <input type='radio' name='motheralive' value='no' onChange={handleMotherAlive} />
               No
               </label>
            </div>
         </div>
         <div className='form-group'>
            <label htmlFor='mothername'>Mother Name</label><br/><br/>
            <input type='text' name='mothername' id='mothername' placeholder='Mother Full Name' onChange={handleMotherName}/>
         </div>
         <div className='form-group'>
            <label htmlFor='motheroccupation'>Mother Occupationn</label><br/><br/>
            <input type='text' name='motheroccupation' id='motheroccupation' placeholder='Engineer,HouseWife' onChange={handleMotherOccupation}/>
         </div>
         <div className='form-group'>
            <label htmlFor='parentslivingtogether'>Parents Living Together?</label><br/><br/>
            <div>
               <label>
               <input type='radio' name='parentslivingtogether' value='yes' onChange={handleParentsLivingTogether} />
               Yes
               </label>        <label>
               <input type='radio' name='parentslivingtogether' value='no' onChange={handleParentsLivingTogether}/>
               No
               </label>
            </div>
         </div>
         <div className='form-group'>
            <label htmlFor='intercastmarriage'>Inter-Cast Marriage in Family?</label><br/><br/>
            <div>
               <label>
               <input type='radio' name='intercastmarriage' value='yes' onChange={handleIntercastMarriage} />
               Yes
               </label>        <label>
               <input type='radio' name='intercastmarriage' value='no' onChange={handleIntercastMarriage} />
               No
               </label>
            </div>
         </div>
         <div className='form-group'>
            <label htmlFor='mamasname'>Mama's Name</label><br/><br/>
            <input type='text' name='mamasname' id='mamasname' placeholder="Mama's Full Name or SurName" onChange={handleMamasName}/>
         </div>
         <div className='form-group'>
            <label htmlFor='nativeplace'>Native Place</label><br/><br/>
            <input type='text' name='nativeplace' id='nativeplace' placeholder="Enter Native Location City" onChange={handleNativePlace}/>
         </div>
         <div className='profilegroup'>
            <label htmlFor='mamasname'>Family Wealth</label><br/><br/>
            <input type='text' name='familywealth' id='familywealth' placeholder="Comma seperated Family Wealth (Flat,Car,Transport Business etc)" onChange={handleFamilyWealth}/>
         </div>
         <div className='form-group'>
            <label htmlFor='currentlocation'>Current Location</label><br/><br/>
            <input type='text' name='currentlocation' id='currentlocation' placeholder="Enter Current Location City" onChange={handleCurrentLocation}/>
         </div>
         <div className='profilegroup'>
            <label htmlFor='relativessurname'>Relative's SurNames</label><br/><br/>
            <input type='text' name='relativessurname' id='relativessurname' placeholder="Comma seperated Relatives Surname (Bhosale,Khale,Tendulkar,etc)" onChange={handleRelativesSurname}/>
         </div>
         <div className='form-group1'>
            <label htmlFor='unmarriedbrothers'>Unmarried Brothers</label><br/><br/>
            <div className='unmarriedbrothers'>

            </div>
            <input 
               type='number' 
               name='unmarriedbrothers' 
               id='unmarriedbrothers' 
               placeholder="Enter Number"
               value={UnmarriedBrothers}
               onChange={handleUnMarriedBrothers}>
            </input>
         </div>
         <div className='form-group1'>
            <label htmlFor='marriedbrothers'>Marriedbrothers</label><br/><br/>
            <div className='marriedsisters'>
               <input 
                  type='number' 
                  name='marriedbrothers' 
                  id='marriedbrothers' 
                  placeholder="Enter Number"v
                  value={MarriedBrothers}
                  onChange={handleMarriedBrothers}>
               </input>
            </div>
         </div>
         <div className='form-group1'>
            <label htmlFor='unmarriedsisters'>Unmarried Sisters</label><br/><br/>
            <div className='marriedsisters'>
               <input 
                  type='number' 
                  name='unmarriedsisters' 
                  id='unmarriedsisters' 
                  placeholder="Enter Number"
                  value={UnmarriedSisters}
                  onChange={handleUnMarriedSisters}>
                  
               </input>
            </div>
         </div>
         <div className='form-group1'>
            <label htmlFor='marriedsisters'>Married Sisters</label><br/><br/>
            <div className='marriedsisters'>
               <input 
                  type='number' 
                  name='marriedsisters' 
                  id='marriedsisters' 
                  placeholder="Enter Number"
                  value={MarriedSisters}
                  onChange={handleMarriedSisters}>
               </input>

            </div>
         </div>
         <div className='personalsave'>
              <button className='save' type='submit'onClick={handleSubmit}>Save</button>
            </div>
      </form>
   </div>
   <div className='reminder'>
   <h2>*Please Make Sure to Save before moving to the next Section*</h2>
        </div>
</div>
)
}

const mapStateToProps = (state) => ({
   familyDetails: state.familyDetails,
 });
 const ConnectedFamilyDetails = connect(mapStateToProps)(FamilyDetails);
 
 export default ConnectedFamilyDetails;