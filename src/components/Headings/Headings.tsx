import './Headings.css';

interface HeadingsProps {
  typeOfHeading: string; 
  headingText: string;
  span?: string; // The "?" makes it optional since you have a default
}

export default function Headings({typeOfHeading, headingText, span = ""} : HeadingsProps)
{
  let headingClass;

  switch(typeOfHeading){
    case "main":
      headingClass = "main-heading saira-stencil-700"
      break;
    case "sub":
      headingClass = "sub-heading tomorrow-medium"
      break;
    case "footer":
      headingClass = "tomorrow-medium"
      break;
    case "normal":
      headingClass = ""
      break;
    default:
      headingClass = "tomorrow-regular"
      break;

  }
  return(
    <>
      <div className={headingClass}>
        {headingText}
        {span != ""? <span>{span}</span>: ""}
      </div>
    </>
  );
}

