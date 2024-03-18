import React from 'react'
import { CARDS } from '../Constant'
import Sbutton from './Sbutton'
import { Link } from 'react-router-dom'
const ServiceButton = () => {
    return (
        <>
            <div className='service-panel container-fluid'>
                <h2>Services</h2>
                <div className='row'>

                    {
                        CARDS.map((item, index) => {
                            return (
                                <div className='col-lg-4'>
                                    <Link to={`/${item.route}`}>
                                        <Sbutton key={index} title={item.title} />
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default ServiceButton