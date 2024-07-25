import React from 'react'

const IrrigationDetails = () => {
  const irrigation = [
    {
        type : 'Flood irrigation',
        source : 'Tube well',
        date : '18-12-2023'
    },
    {
        type : 'Flood irrigation',
        source : 'Tube well',
        date : '25-01-2024'
    },
    {
        type : 'Flood irrigation',
        source : 'Tube well',
        date : '28-02-2024'
    },
    {
        type : 'Flood irrigation',
        source : 'Tube well',
        date : '30-03-2024'
    }
  ]
  return (
    <div className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
        <h3 className='mt-2'>Irrigation Details</h3>
        
        <div className='lists'>
            {
                irrigation.map((item) => 
                <div className='list-style'>
                    <p>Date : {item.date}</p>
                    <p>Type : {item.type}</p>
                    <p>Source : {item.source}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default IrrigationDetails