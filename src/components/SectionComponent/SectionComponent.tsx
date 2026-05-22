import './SectionComponent.css';
import Headings from '../Headings/Headings';
import SectionInput from '../SectionInputs/SectionInputs.tsx'
import CheckBoxes from '../CheckBoxes/CheckBoxes.tsx';
import InputBoxes from "../InputBoxes/InputBoxes.tsx"

interface CommonProps {
  typeOfHeading: string; 
  headingText: string;
  span?: string; 
}

interface CheckBoxProps extends CommonProps{
  sectionType: "salah",
  checkBoxValue: {
    fajr: boolean,
    dhuhr: boolean,
    asr: boolean,
    maghrib: boolean,
    isha: boolean
  },
  checkBoxValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputValue?: never;
  inputValueChange?: never;
}
interface InputValueProps extends CommonProps{
  sectionType: "quran" | "coding" | "exercise",  
  inputValue: {
    value: number,
    isPagesChecked?: boolean
  },
  inputValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkBoxValue?: never;
  checkBoxValueChange?: never;
}

type HeadingsProps = CheckBoxProps | InputValueProps;

interface HeadingsPropsSalahCheckBox {
  checkBoxValue: {
    fajr: boolean,
    dhuhr: boolean,
    asr: boolean,
    maghrib: boolean,
    isha: boolean
  },
  checkBoxValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function SalahCheckBoxList({checkBoxValue, checkBoxValueChange}: HeadingsPropsSalahCheckBox) {
  
  //need to send updated value from here 
  let salahInfo = [
    {
      name: "fajr",
      label: "Fajr",
      checked: checkBoxValue.fajr,
      onChange: checkBoxValueChange
    },
    {
      name: "dhuhr",
      label: "Dhuhr",
      checked: checkBoxValue.dhuhr,
      onChange: checkBoxValueChange
    },
    {
      name: "asr",
      label: "Asr",
      checked: checkBoxValue.asr,
      onChange: checkBoxValueChange
    },
    {
      name: "maghrib",
      label: "Maghrib",
      checked: checkBoxValue.maghrib,
      onChange: checkBoxValueChange
    },
    {
      name: "isha",
      label: "Isha",
      checked: checkBoxValue.isha,
      onChange: checkBoxValueChange
    }
  ]

  return (
    <>
      {salahInfo.map((salah) => (
        <CheckBoxes
            typeOfCheckBox="salah"
            value={salah.label}
            name={salah.name}
            key={salah.name}
            isChecked={salah.checked}
            onChange={salah.onChange}
            ></CheckBoxes>
      ))}
    </>
  );
}

export default function SectionComponent({typeOfHeading, headingText, span, sectionType, inputValue, inputValueChange, checkBoxValue, checkBoxValueChange} : HeadingsProps) {

  let headingClass;
  let sectionContent;
  switch(sectionType){
    case "salah":
      headingClass = "sub-section salah-section";
      sectionContent = <>
                        <SalahCheckBoxList
                          checkBoxValue={checkBoxValue}
                          checkBoxValueChange={checkBoxValueChange}
                        ></SalahCheckBoxList>
                      </>
      break;
    case "quran":
      headingClass = "sub-section quran-section"
      sectionContent = <>
                        <InputBoxes name="quran"
                                    inputValue={inputValue.value}
                                    inputValueChange={inputValueChange}
                                     ></InputBoxes>
                        <CheckBoxes
                          value="Pages"
                          name="Pages"
                          isChecked={inputValue.isPagesChecked}
                          onChange={inputValueChange}
                        ></CheckBoxes>
                      </>
      break;
    case "coding":
      headingClass = "sub-section coding-section";
      sectionContent = <>
                        <InputBoxes name="coding"
                                    inputValue={inputValue.value}
                                    inputValueChange={inputValueChange}
                                     ></InputBoxes>
                        <Headings
                          typeOfHeading='normal'
                          headingText='Minutes'
                          ></Headings>
                      </>
      break;
    case "exercise":
      headingClass = "sub-section exercise-section"
      sectionContent = <>
                      <InputBoxes name="exercise"
                                  inputValue={inputValue.value}
                                  inputValueChange={inputValueChange}
                                  ></InputBoxes>
                      <Headings
                        typeOfHeading='normal'
                        headingText='Minutes'
                        ></Headings>
                    </>
      break;
  }

  return(
    <>
      <div className={headingClass}>
        <Headings
          typeOfHeading={typeOfHeading}
          headingText={headingText}
          span={span}
          ></Headings>
        <SectionInput>
          {sectionContent}
        </SectionInput>
      </div>
    </>
  );
}

