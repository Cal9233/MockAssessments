import React from 'react';
import { useAppContext } from '../../Context/AppContext';
import './OutputView.css';

const OutputView = ({value}) => {
    //const {value} = useAppContext()
  return (
    <div className="output-container">
        <h4>{value}</h4>
    </div>
  )
}

export default OutputView