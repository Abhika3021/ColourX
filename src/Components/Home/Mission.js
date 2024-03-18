import React from 'react'
import {TbTargetArrow} from 'react-icons/tb';
import {GiBullseye} from 'react-icons/gi'
import {ImEye} from 'react-icons/im'
const Mission = () => {
  return (
    <div className='mission conatiner'>
      <div className='row'>
        <div className='mission-content col-lg-6'>
          <h2 className='mission-head'>
            Mission <GiBullseye className='mission-icon' />
          </h2>
          <p>
            At Colour X , our mission is to revolutionize the outdoor advertising landscape by providing innovative and exceptional printing solutions that empower businesses to connect with their target audiences on a deeper level. We aim to be a driving force behind our clients' success, leveraging our creativity, expertise, and cutting-edge technology to deliver impactful and visually striking campaigns that leave a lasting impression.
          </p>
        </div>
        <div className='mission-content col-lg-6'>
          <h2>
            Vision <ImEye className='mission-icon'/>
          </h2>
          <p>
            Our vision at VR Printers is to be the undisputed leader in the outdoor advertising industry, setting new benchmarks for creativity, quality, and customer satisfaction. We envision a future where our name becomes synonymous with excellence, and businesses across the globe turn to us for unparalleled outdoor advertising solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission