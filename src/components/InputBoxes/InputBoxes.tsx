import './InputBoxes.css';

interface HeadingsProps {
  name: string,
  inputValue?: number,
  inputValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function InputBoxes({name, inputValue, inputValueChange} : HeadingsProps)
{
  const id=name+"InputID";

  return(
    <>
      <input type="number" id={id} min="0" value={inputValue} onChange={inputValueChange} name={name} className="tomorrow-regular"/>
    </>
  );
}
