import './CheckBoxes.css';
import Headings from '../Headings/Headings';

interface HeaderProps{
  typeOfCheckBox?: string,
  value: string,
  name: string,
  isChecked?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function CheckBoxes({typeOfCheckBox = "", value, name, isChecked, onChange}:HeaderProps){
  let classNameValue;
  
  switch(typeOfCheckBox){
    case "salah":
      classNameValue= `salah-checkbox ${isChecked?"active-checkbox":""}`
      break;
    default:
      classNameValue= `generic-checkbox ${isChecked?"active-checkbox":""}`
      break;
  }

  return (
    <>
      <div className={classNameValue}>
          <input type="checkbox" name={name} value={value} checked={isChecked} onChange={onChange}/>
          <Headings
            typeOfHeading="salah"
            headingText={value}
          ></Headings>
      </div>
    </>
  )
}
