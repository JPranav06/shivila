import React, { useState,useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFloppyDisk, faBold, faItalic, faUnderline, faListUl, faListOl, faMinus, faTable, faStrikethrough, faUndo, faRedo, faExpandArrowsAlt, faSquarePlus,faTrashCan, faParagraph } from '@fortawesome/free-solid-svg-icons';
import './Expectations.css';


const Expectations = ({formData}) => {

   const [expectationData, setExpectationData] = useState(null);
   
   useEffect(() => {
      // Retrieve form data from local storage
      const storedData = localStorage.getItem('expectationData');
      if (storedData) {
      setExpectationData(JSON.parse(storedData));
      }
   }, []);
   
const [income, setIncome] = useState(0);
const handleIncomeChange = (e) => {
   setIncome(parseInt(e.target.value));
};
const [minimumAge, setMinimumAge] = useState(0);
const handleMinimumAgeChange= (e) => {
   setMinimumAge(parseInt(e.target.value));
};
const [maximumAge, setMaximumAge] = useState(0);
const handleMaximumAgeChange = (e) => {
   setMaximumAge(parseInt(e.target.value));
};
const heightOptions = ['Select', 'Below 4ft', '4ft 0in', '4ft 1in', '4ft 2in', '4ft 3in', '4ft 4in', '4ft 5in', '4ft 6in', '4ft 7in', '4ft 8in', '4ft 9in', '4ft 10in', '4ft 11in', '5ft 0in', '5ft 1in', '5ft 2in', '5ft 3in', '5ft 4in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in', '5ft 10in', '5ft 11in', '6ft 0in', '6ft 1in', '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in', '6ft 6in', '6ft 7in', '6ft 8in', '6ft 9in', '6ft 10in', '6ft 11in', 'Above 7ft'];
const casteOptions = ['Select', 'Adaviyar', 'Agri', 'Ahirwar', 'Ahluwalia', 'Ahluwalia', 'Anjana Chaudhari', 'Arora', 'Asati', 'Attar', 'Bairagi Brahmin', 'Balija', 'Banai', 'Banaphar', 'Bandhmati', 'Barai', 'Bari jati', 'Barika', 'Beldar', 'Bhambi', 'Bhambi Khalpa', 'Bhambi Rohit', 'Bhambi Sindhi Mochi', 'Bhandari', 'Bhanushali', 'Bhar', 'Bharbhunja (Hindu)', 'Bhat', 'Bhatraju', 'Bhatti', 'Bhavsar', 'Bhil Gametia', 'Bhil Mama', 'Bhishti', 'Bhulia', 'Bhumihar', 'Bind', 'Bot', 'Boya', 'Brahmin', 'Burud', 'Chakyar', 'Chamail', 'Chambhar', 'Charan', 'Chasa', 'Chaukalshi', 'Cherayi Panicker', 'Chero', 'Chettiar', 'Chhaparband', 'Chhipi', 'Chik', 'Chunara', 'Churihar', 'Dahima', 'Daivadnya', 'Dangi people', 'Desikar', 'Devadiga', 'Devanga', 'Devendrakula Velalar', 'Dhagi', 'Dheevara', 'Dhekaru', 'Dhusia', 'Dogra Jheer', 'Elur Chetty', 'Eradi', 'Ezhava', 'Ezhuthachan', 'Gadaria', 'Gadhia', 'Gahoi', 'Ganak', 'Gandhabanik', 'Gauda and Kunbi', 'Gavli', 'Gawaria', 'Ghamaila', 'Gharami', 'Ghasiara', 'Ghirth', 'Gihara', 'Godha', 'Gollewar', 'Gopal', 'Goriya', 'List of gotras', 'Goud', 'Gowala', 'Gowari', 'Gudia', 'Gurjar', 'Halba', 'Halpati', 'Hatkar', 'Heri', 'Holar caste', 'Hoogar', 'Hurkiya', 'Idangai', 'Ilayathu', 'Isai Vellalar', 'Istimrari', 'Iyer', 'Jaiswal', 'Jalia Kaibarta', 'Jāti', 'Jhamar', 'Jhora', 'Jogi', 'Jogi Faqir', 'Joisar', 'Jyotish', 'Kadia', 'Kadia Kumbhar', 'Kaikalas', 'Kalabaz', 'Kalari Panicker', 'Kalingi', 'Kalita', 'Kalwar', 'Kamar', 'Kamma', 'Kammalar', 'Kanakkan', 'Kanet', 'Kaniyar', 'Kansara', 'Kanyakubja Brahmin', 'Kapariya', 'Kapu', 'Karmakar', 'Kartha', 'Kashmiri Muslim tribes from Hindu lineage', 'Katesar', 'Kathi people', 'Kesarwani', 'Kewat', 'Khairaha', 'Khant', 'Kharol', 'Kharwa caste', 'Khati', 'Khatik', 'Khatri', 'Kirar', 'Kisan', 'Koch', 'Ghedia Koli', 'Kori', 'Koliyar', 'Komati', 'Konar', 'Kondaikatti Vellalar', 'Dhiman', 'Koshta', 'Kshatriya', 'Barwar', 'Kuchband', 'Kumawat', 'Kumhar', 'Kunbi', 'Kuravar', 'Kuta', 'Kuthaliya Bora', 'Labana', 'Labbay', 'Lakhera', 'Lavana', 'List of Namasudras', 'List of Telugu castes', 'Lodha', 'Lonari', 'Mahishya', 'Mahton', 'Mahuri', 'Maiya', 'Mal', 'Mali caste', 'Mang', 'Manipuri Brahmin', 'Mannadiyar', 'Maratha', 'Cheetah Mehrat', 'Menariya', 'Meshuchrarim', 'Mirshikar', 'Mistri caste', 'Hussaini Brahmin', 'Mohyal Brahmin', 'Motisar', 'Mudiraju', 'Mukkulathor', 'Mukkuvar', 'Mundhra', 'Muslim Dhobi', 'Nadar', 'Nador', 'Nagarathar'];
const educationDetails = [
   "Software Engineer",
   "Doctor",
   "Teacher",
   "Accountant",
   "Nurse",
   "Architect",
   "Lawyer",
   "Marketing Manager",
   "Graphic Designer",
   "Project Manager",
   "Financial Analyst",
   "Human Resources Manager",
   "Data Scientist",
   "Sales Manager",
   "Civil Engineer",
   "Chef",
   "Writer",
   "Electrician",
   "Photographer",
   "Mechanical Engineer",
   "Web Developer",
   "Dentist",
   "Social Media Manager",
   "Event Planner",
   "Psychologist",
   "Police Officer",
   "Interior Designer",
   "Business Analyst",
   "Pharmacist",
   "Fashion Designer",
   "Research Scientist",
   "IT Consultant",
   "Journalist",
   "Product Manager",
   "Flight Attendant",
   "Physical Therapist",
   "Investment Banker",
   "Veterinarian",
   "Musician",
   "Fitness Instructor",
   "Civil Rights Lawyer",
   "Biomedical Engineer",
   "Real Estate Agent",
   "Air Traffic Controller",
   "Art Director",
   "Mathematician",
   "Chemical Engineer",
   "UX/UI Designer",
   "Geologist",
   "Marine Biologist",
   "Singer",
   "Forensic Scientist",
   "Environmental Engineer"
 ];
 

const maritalStatusOptions = [
'Unmarried',
'Divorcee',
'Widow/Widower',
'Separated',
];


const [caste, setCaste] = useState('');
const handleCasteChange = (e) => {
setCaste(e.target.value);
};
const [preferredCities, setPreferredCities] = useState(['']);

const addPreferredCity = () => {
   setPreferredCities([...preferredCities, '']);
 };
 
 const handlePreferredCityChange = (index, value) => {
   const updatedCities = [...preferredCities];
   updatedCities[index] = value;
   setPreferredCities(updatedCities);
 };
 
const handleDeletePreferredCity = (index) => {
   const updatedCities = [...preferredCities];
   updatedCities.splice(index,1);
   setPreferredCities(updatedCities);
};
const formatText = (command) => {
document.execCommand(command, false, null);
};
const insertTable = () => {
const table = `
<table>
   <tr>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
   </tr>
</table>
`;
document.execCommand('insertHTML', false, table);
};
const undo = () => {
document.execCommand('undo', false, null);
};
const redo = () => {
document.execCommand('redo', false, null);
};
const formatParagraph = () => {
document.execCommand('formatBlock', false, 'p');
};
const toggleMaximize = () => {
const editor = document.getElementById('editor');
editor.classList.toggle('maximize');
};
const [openForInterCastMarriage, setOpenForInterCastMarriage] = useState('');
const [maritalStatus, setMaritalStatus] = useState('');
const handleInterCastMarriageChange = (e) => {
setOpenForInterCastMarriage(e.target.value);
};

const handleMaritalStatusChange = (e) => {
setMaritalStatus(e.target.value);
};
const [education, setEducation] = useState('');
const handleEducationChange = (e) => {
   setEducation(e.target.value);
   };
const [minimumHeight, setMinimumHeight] = useState('');
const handleMinimumHeightChange = (e) => {
   setMinimumHeight(e.target.value);
   };
const [maximumHeight, setMaximumHeight] = useState('');


const handleMaximumHeightChange = (e) => {
setMaximumHeight(e.target.value);
};
const navigate = useNavigate();
const handleSubmit = (e) => {
   e.preventDefault()
   
   const formData = {
   income,
   minimumAge,
   maximumAge,
   preferredCities,
   caste,
   education,
   minimumHeight,
   maximumHeight,
   openForInterCastMarriage,
   maritalStatus,
   };
   localStorage.setItem('expectationData', JSON.stringify(formData));
   
   // Navigate to the Details component
   navigate('/details');
   console.log(formData);
};


return (
<div className="expectations-details">
   <div className="heading">
      <h2>Expectations</h2>
   </div>
   <div className="expectations-details-content">
      <form className="detail-form" onSubmit={handleSubmit}>
         <div className="form-group">
            <label>Minimum Annual Income</label>
            <br />
            <br />
            <div className="income-input">
               <input
                  type="number"
                  id="income"
                  name="income"
                  value={income}
                  onChange={handleIncomeChange}
                  />
               <button className="rupees">₹</button>
            </div>
         </div>
         <div className="form-group">
            <label htmlFor="minimumheight">Minimum Height</label>
            <br />
            <br />
            <select id="minimumheight" name="minimumheight" value={minimumHeight} onChange={handleMinimumHeightChange}>
               <option value="">Select</option>
               {heightOptions.map((height, index) => (
               <option key={index} value={height}>
                  {height}
               </option>
               ))}
            </select>
         </div>
         <div className="form-group">
            <label htmlFor="maximumheight">Maximum Height</label>
            <br />
            <br />
            <select id="maximumheight" name="maximumheight" value={maximumHeight} onChange={handleMaximumHeightChange}>
               <option value="">Select</option>
               {heightOptions.map((height, index) => (
               <option key={index} value={height}>
                  {height}
               </option>
               ))}
            </select>
         </div>
         <div className="form-group">
            <label htmlFor="openforintercastmarriage">
            Open For InterCast Marriage
            </label>
            <br />
            <br />
            <div>
               <label>
               <input
type="radio"
name="openforintercastmarriage"
value="true"
checked={openForInterCastMarriage === 'true'}
onChange={handleInterCastMarriageChange}
/>

               Yes
               </label>
               <label>
               <input
type="radio"
name="openforintercastmarriage"
value="false"
checked={openForInterCastMarriage === 'false'}
onChange={handleInterCastMarriageChange}
/>
               No
               </label>
            </div>
         </div>
                  <div className="form-group">
            <label>Minimum Age</label>
            <br />
            <br />
            <div className="Minimum-age-input">
            <input
               type="number"
               id="minimumage"
               name="minimumage"
               value={minimumAge}
               onChange={handleMinimumAgeChange}
            />
            <button className="rupees1">Years</button>
            </div>
         </div>
         <div className="form-group">
            <label>Maximum Age</label>
            <br />
            <br />
            <div className="Maximum-age-input">
            <input
               type="number"
               id="maximumage"
               name="maximumage"
               value={maximumAge}
               onChange={handleMaximumAgeChange}
            />
            <button className="rupees1">Years</button>
            </div>
         </div>


         <div className="form-group2">
            <label htmlFor="educationdetails">Education Expectations</label>
            <br />
            <br />
            <select name="educationdetails" id="educationdetails" value={education} onChange={handleEducationChange}>
               <option value="">Select</option>
               {educationDetails.map((education, index) => (
               <option key={index} value={education}>
                  {education}
               </option>
               ))}
            </select>
         </div>
         <div className="form-group2">
            <label htmlFor="caste">Caste</label>
            <br />
            <br />
            <select id="caste" name="caste" value={caste} onChange={handleCasteChange}>
               <option value="">Select</option>
               {casteOptions.map((caste, index) => (
               <option key={index} value={caste}>
                  {caste}
               </option>
               ))}
            </select>
         </div>
         <div className="form-group3">
            <label htmlFor="maritalstatus">Marital Status</label>
            <br />
            <br />
            <select
id="maritalstatus"
name="maritalstatus"
value={maritalStatus}
onChange={handleMaritalStatusChange}
>
<option value="">Select</option>
{maritalStatusOptions.map((status, index) => (
 <option key={index} value={status} selected={status === maritalStatus}>
   {status}
 </option>
))}
</select>



         </div>
         <div className="preferred-cities-container">
      <label>Preferred Cities</label>
      <div className="preferred-cities">
         {preferredCities.map((city, index) => (
            <div className="form-group" key={index}>
               <input
                  type="text"
                  id={`preferredcity${index}`}
                  name={`preferredcity${index}`}
                  placeholder="Start Typing City or Suburb Name"
                  value={city}
                  onChange={(e) => handlePreferredCityChange(index, e.target.value)}
               />
               <button
                  type="button"
                  className="delete-city-btn"
                  onClick={() => handleDeletePreferredCity(index)}
               >
                  <FontAwesomeIcon icon={faTrashCan} />
               </button>
            </div>
         ))}
         <div className="form-group add-city-group">
            <input
               type="text"
               id={`preferredcity${preferredCities.length}`}
               name={`preferredcity${preferredCities.length}`}
               placeholder="Start Typing City or Suburb Name"
               value={preferredCities[preferredCities.length - 1]}
               onChange={(e) =>
                  handlePreferredCityChange(preferredCities.length - 1, e.target.value)
               }
            />
            <button type="button" className="add-city-btn" onClick={addPreferredCity}>
               <FontAwesomeIcon icon={faSquarePlus} />
            </button>
         </div>
      </div>
   </div>
        
         
         <div className='e'>
            <div className="editpage">
               <div className="editor-container">
                  <div className="editheading">
                     <label>More details about yourself and your Expectations</label>
                  </div>
                  <div className="editor-toolbar">
                     <div className="edit1">
                        <button onClick={() =>
                           formatText('bold')}>
                           <FontAwesomeIcon icon={faBold} />
                        </button>
                        <button onClick={() =>
                           formatText('italic')}>
                           <FontAwesomeIcon icon={faItalic} />
                        </button>
                        <button onClick={() =>
                           formatText('underline')}>
                           <FontAwesomeIcon icon={faUnderline} />
                        </button>
                     </div>
                     <div className="edit2">
                        <button onClick={() =>
                           formatText('insertunorderedlist')}>
                           <FontAwesomeIcon icon={faListUl} />
                        </button>
                        <button onClick={() =>
                           formatText('insertorderedlist')}>
                           <FontAwesomeIcon icon={faListOl} />
                        </button>
                        <button onClick={formatParagraph}>
                           <FontAwesomeIcon icon={faParagraph} />
                        </button>
                     </div>
                     <div className="edit3">
                        <button onClick={() =>
                           formatText('outdent')}>
                           <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button onClick={insertTable}>
                           <FontAwesomeIcon icon={faTable} />
                        </button>
                     </div>
                     <div className="edit4">
                        <button onClick={() =>
                           formatText('strikethrough')}>
                           <FontAwesomeIcon icon={faStrikethrough} />
                        </button>
                     </div>
                     <div className="edit5">
                        <button onClick={undo}>
                           <FontAwesomeIcon icon={faUndo} />
                        </button>
                        <button onClick={redo}>
                           <FontAwesomeIcon icon={faRedo} />
                        </button>
                     </div>
                     <div className="edit6">
                        <button onClick={toggleMaximize}>
                           <FontAwesomeIcon icon={faExpandArrowsAlt} />
                        </button>
                     </div>
                  </div>
                  <div
                     id="editor"
                     className="editor"
                     contentEditable="true"
                     ></div>
               </div>
            </div>
         </div>
         <div className="button-container">
            <div className='cancel'>
            <button onClick={() => navigate('/')} >
<FontAwesomeIcon icon={faArrowLeft} />
Cancel
</button>

            </div>
            <div className='saves'>
               <button type="submit">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  Save & Continue
               </button>
            </div>
         </div>
      </form>
   </div>
</div>
);
};
export default Expectations;