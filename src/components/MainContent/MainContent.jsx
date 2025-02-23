import React from 'react';
import { Input } from "../Input/Input";
import { Card } from "../Card/Card";
import { useAppContext } from '../Context/AppContext';
import "./MainContent.css"

const MainContent = () => {
  const {isOpen, handleTypeChange, typeValue} = useAppContext();
  return (
    <div className={`content-container ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="component-container">
        <Input type="text" value={typeValue} onChange={handleTypeChange}/>
        <Card />
      </div>
    </div>
  )
}

export default MainContent