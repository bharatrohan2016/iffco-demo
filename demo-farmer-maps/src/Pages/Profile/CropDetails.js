import React from 'react'

const CropDetails = () => {
  return (
    <div  className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
        <h3 className='mt-2'>Crop Details</h3>
        <p>Crop : Wheat</p>
        <p>Area : 6 Acres</p>
        <p>Variety : 2285</p>
        <p>Seed Rate(kg/acre) : 100</p>
        <p>Date of Land Prepration : 15, Oct 2023</p>
        <p>Date of Sowing/Transplantation : 20, Oct 2023</p>
        <p>Date of Harvest : 30, March 2023</p>
    </div>
  )
}

export default CropDetails;