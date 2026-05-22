import './SectionInputs.css';
import type { ReactNode } from 'react';

interface HeaderProps{
  children: ReactNode
}

export default function SectionInputs({children}:HeaderProps){
  return(
    <>
    <div className="section-inputs">
      {children}
    </div>
    </>
  );
}
