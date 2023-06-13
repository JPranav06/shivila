import React, { useState } from 'react';
import {useParams } from 'react-router-dom';
import './Profilecreate.css';
import Header from '../Components/Header';

const Profilecreate = () => {
  const { profileName } = useParams();

  const [inputValue, setInputValue] = useState("");
  const [weight, setWeight] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(parseInt(e.target.value));
  };


  const url1 = 'in KG';
const casteOptions = ['Select', 'Adaviyar', 'Agri', 'Ahirwar', 'Ahluwalia', 'Ahluwalia', 'Anjana Chaudhari', 'Arora', 'Asati', 'Attar', 'Bairagi Brahmin', 'Balija', 'Banai', 'Banaphar', 'Bandhmati', 'Barai', 'Bari jati', 'Barika', 'Beldar', 'Bhambi', 'Bhambi Khalpa', 'Bhambi Rohit', 'Bhambi Sindhi Mochi', 'Bhandari', 'Bhanushali', 'Bhar', 'Bharbhunja (Hindu)', 'Bhat', 'Bhatraju', 'Bhatti', 'Bhavsar', 'Bhil Gametia', 'Bhil Mama', 'Bhishti', 'Bhulia', 'Bhumihar', 'Bind', 'Bot', 'Boya', 'Brahmin', 'Burud', 'Chakyar', 'Chamail', 'Chambhar', 'Charan', 'Chasa', 'Chaukalshi', 'Cherayi Panicker', 'Chero', 'Chettiar', 'Chhaparband', 'Chhipi', 'Chik', 'Chunara', 'Churihar', 'Dahima', 'Daivadnya', 'Dangi people', 'Desikar', 'Devadiga', 'Devanga', 'Devendrakula Velalar', 'Dhagi', 'Dheevara', 'Dhekaru', 'Dhusia', 'Dogra Jheer', 'Elur Chetty', 'Eradi', 'Ezhava', 'Ezhuthachan', 'Gadaria', 'Gadhia', 'Gahoi', 'Ganak', 'Gandhabanik', 'Gauda and Kunbi', 'Gavli', 'Gawaria', 'Ghamaila', 'Gharami', 'Ghasiara', 'Ghirth', 'Gihara', 'Godha', 'Gollewar', 'Gopal', 'Goriya', 'List of gotras', 'Goud', 'Gowala', 'Gowari', 'Gudia', 'Gurjar', 'Halba', 'Halpati', 'Hatkar', 'Heri', 'Holar caste', 'Hoogar', 'Hurkiya', 'Idangai', 'Ilayathu', 'Isai Vellalar', 'Istimrari', 'Iyer', 'Jaiswal', 'Jalia Kaibarta', 'Jāti', 'Jhamar', 'Jhora', 'Jogi', 'Jogi Faqir', 'Joisar', 'Jyotish', 'Kadia', 'Kadia Kumbhar', 'Kaikalas', 'Kalabaz', 'Kalari Panicker', 'Kalingi', 'Kalita', 'Kalwar', 'Kamar', 'Kamma', 'Kammalar', 'Kanakkan', 'Kanet', 'Kaniyar', 'Kansara', 'Kanyakubja Brahmin', 'Kapariya', 'Kapu', 'Karmakar', 'Kartha', 'Kashmiri Muslim tribes from Hindu lineage', 'Katesar', 'Kathi people', 'Kesarwani', 'Kewat', 'Khairaha', 'Khant', 'Kharol', 'Kharwa caste', 'Khati', 'Khatik', 'Khatri', 'Kirar', 'Kisan', 'Koch', 'Ghedia Koli', 'Kori', 'Koliyar', 'Komati', 'Konar', 'Kondaikatti Vellalar', 'Dhiman', 'Koshta', 'Kshatriya', 'Barwar', 'Kuchband', 'Kumawat', 'Kumhar', 'Kunbi', 'Kuravar', 'Kuta', 'Kuthaliya Bora', 'Labana', 'Labbay', 'Lakhera', 'Lavana', 'List of Namasudras', 'List of Telugu castes', 'Lodha', 'Lonari', 'Mahishya', 'Mahton', 'Mahuri', 'Maiya', 'Mal', 'Mali caste', 'Mang', 'Manipuri Brahmin', 'Mannadiyar', 'Maratha', 'Cheetah Mehrat', 'Menariya', 'Meshuchrarim', 'Mirshikar', 'Mistri caste', 'Hussaini Brahmin', 'Mohyal Brahmin', 'Motisar', 'Mudiraju', 'Mukkulathor', 'Mukkuvar', 'Mundhra', 'Muslim Dhobi', 'Nadar', 'Nador', 'Nagarathar'];

  

  const bloodGroupOptions = [
    'Select',
    'A +ve',
    'A -ve',
    'B +ve',
    'B -ve',
    'O +ve',
    'O -ve',
    'AB +ve',
    'AB -ve',
  ];
  const bodyType = ['Select','Slim', 'Athletic', 'Average', 'Fat'];
  const height = ['Select', 'Below 4ft', '4ft 0in', '4ft 1in', '4ft 2in', '4ft 3in', '4ft 4in', '4ft 5in', '4ft 6in', '4ft 7in', '4ft 8in', '4ft 9in', '4ft 10in', '4ft 11in', '5ft 0in', '5ft 1in', '5ft 2in', '5ft 3in', '5ft 4in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in', '5ft 10in', '5ft 11in', '6ft 0in', '6ft 1in', '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in', '6ft 6in', '6ft 7in', '6ft 8in', '6ft 9in', '6ft 10in', '6ft 11in', 'Above 7ft'];
  const complexion = ['Select','Very Fair', 'Fair', 'Average', 'Wheatish', 'Brown', 'Olive', 'Dark'];
  const diet = ['Select','Vegan', 'Vegetarian', 'Eggetarian', 'Occasionally Non Veg', 'Non Veg'];
  const registered = [
    'Select',
    'Self',
    'Father',
    'Mother',
    'Brother',
    'Sister',
    'Cousin',
    'Uncle',
    'Aunty',
    'Sister-in-Law',
    'Brother-in-Law',
    'GrandFather',
    'GrandMother',
    'Maternal Uncle',
    'Paternal Aunt',
    'Friend',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      middleName: e.target.middleName.value,
      lastName: e.target.lastName.value,
      gender: e.target.gender.options[e.target.gender.selectedIndex].value,
      profileName:inputValue,
      maritalStatus: e.target.martialstatus.value,
      otherMobile: e.target.othermobile.value,
      telephone: e.target.telephone.value,
      caste: e.target.caste.value,
      birthdate: e.target.birthdate.value,
      bloodGroup: e.target.bloodgroup.value,
      bodyType: e.target.bodytype.value,
      height: e.target.height.value,
      weight: weight + url1,
      complexion: e.target.complexion.value,
      specs: e.target.specs.value,
      disabilities: e.target.disability.value,
      diet: e.target.diet.value,
      drink: e.target.drink.value,
      smoke: e.target.smoke.value,
      registeredBy: e.target.registeredby.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };

  const storedFormData = localStorage.getItem('formData');
  let storedData = null;
  if (storedFormData) {
    storedData = JSON.parse(storedFormData);
  }

  return (
    <div className='Profilecreatepage'>
      <Header />
      <div className='personaldetails'>
        <div className='heading'>
          <h2>Personal Details</h2>
        </div>
        <div className='personaldetailscontent'>
          <form className='detailform' onSubmit={handleSubmit}>
            <div  className='form-group'>
              <label htmlFor='firstName'>First Name</label><br/><br/>
              <input type='text' id='firstName' name='firstName' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='middleName'>Middle Name</label><br/><br/>
              <input type='text' id='middleName' name='middleName' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name</label><br/><br/>
              <input type='text' id='lastName' name='lastName' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='gender'>Gender</label><br/><br/>
              <select id='gender' name='gender' defaultValue={""}>
                <option value=''>Select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='profilegroup'>
              <label htmlFor='profileName'>Profile Name</label><br/><br/>
              <button className='linkbutton' style={{padding:"1em"}}>http://localhost:3000/profile/create/</button>
              <input type='text' id='profileName' name='profileName' value={inputValue} onChange={handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='maritalstatus'>Marital Status</label><br/><br/>
              <select id='maritalstatus' name='martialstatus' defaultValue={""}>
              <option value=''>Select</option>
                <option value='Unmarried'>Unmarried</option>
                <option value='Divorced'>Divorced</option>
                <option value='Widowed'>Widowed</option>
                <option value='Separated'>Separated</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='othermobile'>Other Mobile</label><br/><br/>
              <input type='text' id='othermobile' name='othermobile' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='telephone'>Telephone</label><br/><br/>
              <input type='text' id='telephone' name='telephone' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='caste'>Caste</label><br/><br/>
              <select id='caste' name='caste' defaultValue={""}>
                {casteOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='birthdate'>Birthdate</label><br/><br/>
              <input type='date' id='birthdate' name='birthdate' defaultValue={""} />
            </div>
            <div className='form-group'>
              <label htmlFor='bloodgroup'>Blood Group</label><br/><br/>
              <select id='bloodgroup' name='bloodgroup' defaultValue={""}>
                {bloodGroupOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='bodytype'>Body Type</label><br/><br/>
              <select id='bodytype' name='bodytype' defaultValue={""}>
                {bodyType.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='height'>Height</label><br/><br/>
              <select id='height' name='height' defaultValue={""}>
                {height.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='weight'>Weight</label><br/><br/>
              <input type='number' id='weight' name='weight' defaultValue={""} onChange={handleWeightChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='complexion'>Complexion</label><br/><br/>
              <select id='complexion' name='complexion' defaultValue={""}>
                {complexion.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
  <label htmlFor='specs'>Specs</label><br/><br/>
  <input type='radio' id='specs-yes' name='specs' value='yes' />
  <label htmlFor='specs-yes'>Yes</label>
  <input type='radio' id='specs-no' name='specs' value='no' />
  <label htmlFor='specs-no'>No</label>  
</div>

<div className='form-group'>
  <label htmlFor='disability'>Disabilities</label><br/><br/>
  <input type='radio' id='disability-yes' name='disability' value='yes' />
  <label htmlFor='disability-yes'>Yes</label>
  <input type='radio' id='disability-no' name='disability' value='no' />
  <label htmlFor='disability-no'>No</label>
</div>

            <div className='form-group'>
              <label htmlFor='diet'>Diet</label><br/><br/>
              <select id='diet' name='diet' defaultValue={""}>
                {diet.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='drink'>Drink</label><br/><br/>
              <select id='drink' name='drink' defaultValue={""}>
              <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
                <option value='Occasionally'>Occasionally</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='smoke'>Smoke</label><br/><br/>
              <select id='smoke' name='smoke' defaultValue={""}>
              <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
                <option value='Occasionally'>Occasionally</option>
              </select>
            </div>
            <div className='profilegroup' style={{width:'100%'}}>
              <label htmlFor='registeredby'>Registered By</label><br/><br/>
              <select id='registeredby' name='registeredby' style={{width:'3  0%'}} defaultValue={""}>
                {registered.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
      
    </div>
  );
};

export default Profilecreate;
