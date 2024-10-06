import React from 'react'
import './men_women.css'
import men from '../assets/men.jpg'
import women from '../assets/women.jpg'


function Men_Women() {
    return (
        <div className='container'>
            <div className="men_iteam">
                <div className="center_data">

                    <h2>men</h2>
                    <a href="Men">shop men</a>
                </div>
            </div>
            <div className="women_iteam">
                <div className="center_data">

                    <h2>women</h2>
                    <a href="Women">shop women</a>
                </div>
            </div>
        </div>
    )
}

export default Men_Women
