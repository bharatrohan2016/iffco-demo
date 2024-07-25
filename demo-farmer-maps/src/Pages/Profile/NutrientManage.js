import React from 'react'

const NutrientManage = () => {
  const nutrients = [
    {
        name : 'FYM',
        unit : 'Quintals',
        quantity : 5,
        date : '10-09-2024'
    },
    {
        name : 'Urea',
        unit : 'Kg',
        quantity : 50,
        date : '15-11-2024'
    },
    {
        name : 'DAP',
        unit : 'kg',
        quantity : 75,
        date : '20-11-2024'
    }
  ];
  return (
    <div  className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
        <h3 className='mt-2'>Nutrient Management</h3>
        
        <div className='lists'>
            {
                nutrients.map((item) => 
                <div className='list-style'>
                    <p>Date : {item.date}</p>
                    <p>Fertilizer : {item.name}</p>
                    <p>Quantity : {item.quantity} {item.unit}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default NutrientManage