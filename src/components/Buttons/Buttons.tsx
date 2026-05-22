import './Buttons.css';

interface HeadingsProps {
  buttonType: string; 
  buttonText: string;
  span?: string;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean
}

export default function Buttons({buttonType, buttonText, span = "", onSubmit, disabled} : HeadingsProps)
{
  let headingClass;

  switch(buttonType){
    case "primary":
      headingClass = "primary-button tomorrow-semibold"
      break;
    case "secondary":
      headingClass = "secondary-button tomorrow-regular"
      break;

  }
  return(
    <>
      <button className={headingClass} type="submit" onClick={onSubmit} disabled={disabled}>
        {buttonText} 
        {span != ""? <span>{span}</span>: ""}
        </button>
    </>
  );
}

