import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Sbutton = ({title}) => {
  return (
    <div className='panel-button'>
        <h4>{title}</h4>
        <ArrowForwardIcon />
    </div>
  )
}

export default Sbutton