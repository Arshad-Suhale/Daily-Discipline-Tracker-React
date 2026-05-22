import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons.js';
import Headings from "./components/Headings/Headings.js";
import SectionComponent from './components/SectionComponent/SectionComponent.js';
import { ToastContainer, toast } from 'react-toastify';

interface formDataInterface{
  salah: {
    [key: string]: boolean; 
    fajr: boolean,
    dhuhr: boolean,
    asr: boolean,
    maghrib: boolean,
    isha: boolean
  },
  quran: {
    value: number,
    isPagesChecked: boolean
  },
  coding: {
    value: number
  }, 
  exercise: {
    value: number
  }
}

const defaultData = {
  salah: {
      fajr: false,
      dhuhr: false,
      asr: false,
      maghrib: false,
      isha: false
  },
  quran: {
      value: 0,
      isPagesChecked: false
  },
  coding: {
      value: 0
  },
  exercise: {
      value: 0
  }
};

function getInitialData(){  
  const localStorageValue = localStorage.getItem('formData');
  if(localStorageValue != null){
    return JSON.parse(localStorageValue);
  }
  else{
    return defaultData;
  }
}

function App() {
  // Declaring States
  const [formData, setFormData] = useState<formDataInterface>(() => getInitialData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReset, setisReset] = useState(false);
  
  // Update Functions
  function updateSalahValue(e: React.ChangeEvent<HTMLInputElement>){
    let newSalah = {...formData}
    newSalah.salah[e.target.name] = e.target.checked;

    setFormData(newSalah)
  }
  function updateQuranValue(e: React.ChangeEvent<HTMLInputElement>){
    let newQuranValue = {...formData};
    let targetType = e.target.type;
    if(targetType != "checkbox")
      newQuranValue.quran.value = Number(e.target.value);
    else
    newQuranValue.quran.isPagesChecked = e.target.checked;
    setFormData(newQuranValue)
  }
  function updateCodingValue(e: React.ChangeEvent<HTMLInputElement>){
    let newCoding = {...formData}
    newCoding.coding.value = Number(e.target.value);

    setFormData(newCoding)
  }
  function updateExerciseValue(e: React.ChangeEvent<HTMLInputElement>){
    let newCoding = {...formData}
    newCoding.exercise.value = Number(e.target.value);

    setFormData(newCoding)
  }  

  // Form Submit/Reset Functions
  function submitHandeler(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    if(localStorage.getItem('formData') == JSON.stringify(formData))
      return;
    setIsSubmitting(true)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    
    
    setIsSubmitting(false)
    toast.success("Data Saved Successfully")

  }
  function resetHandeler(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    if(localStorage.getItem('formData') == null)
      return;
    setisReset(true);
    
    localStorage.removeItem('formData');
    
    setFormData(defaultData);
    
    setisReset(false);
    toast.info("Data Reset Successful")
    
  }

  return (
    <>
      <div className='container'>
        <Headings 
          typeOfHeading="main"
          headingText="Daily Discipline Tracker"
          ></Headings>
        <form>
          <div className="content">
            <SectionComponent
              typeOfHeading="sub"
              headingText="Salah"
              span="🕋"
              sectionType='salah'
              checkBoxValue={formData.salah}
              checkBoxValueChange={updateSalahValue}
              >
              </SectionComponent>
            <SectionComponent
              typeOfHeading="sub"
              headingText="Quran Reading"
              span="📖"
              sectionType='quran'
              inputValue={formData.quran}
              inputValueChange={updateQuranValue}
              >
             </SectionComponent>
            <SectionComponent
              typeOfHeading="sub"
              headingText="Coding Practice"
              span="💻"
              sectionType='coding'
              inputValue={formData.coding}
              inputValueChange={updateCodingValue}
              >
             </SectionComponent>
            <SectionComponent
              typeOfHeading="sub"
              headingText="Exercise Duration"
              span="👟"
              sectionType='exercise'
              inputValue={formData.exercise}
              inputValueChange={updateExerciseValue}
              >
             </SectionComponent>
          </div>
          <div className="buttons-container">
            <Buttons
              buttonType='primary'
              buttonText='Save'
              span='💾'
              onSubmit={submitHandeler}
              disabled={isSubmitting}
              >
              </Buttons>
            <Buttons
              buttonType='secondary'
              buttonText='Reset'
              span='🔄'
              onSubmit={resetHandeler}
              disabled={isReset}
              >
              </Buttons>
          </div>
        </form>
        <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        theme="dark"
                        />
      </div>
      <footer>
        <Headings
          typeOfHeading="footer"
          headingText="Built By Shaik. Arshad Suhale"
          >
          </Headings>
      </footer>
    </>
  )
}

export default App
