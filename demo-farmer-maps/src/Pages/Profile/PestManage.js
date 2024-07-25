import React from 'react'

const PestManage = () => {
  const pestDiseases = [
    {
        majorDisease : 'Aphids',
        pesticideUsed : 'Imidacloprid',
        unit : 'ml',
        dosage : 100,
        date : '1-12-2023'
    },
    {
        majorDisease : 'Leaf Rust',
        pesticideUsed : 'Propiconazole',
        unit : 'ml',
        dosage : 50,
        date : '1-02-2024'
    },
    {
        majorDisease : 'Weed',
        pesticideUsed : 'Carfentrazone Ethyl 40%',
        unit : 'gm',
        dosage : 20,
        date : '22-12-2023'
    }
  ]
    return (
        <div  className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
            <h3 className='mt-2'>Pest Management</h3>
            
            <div className='lists'>
                {
                    pestDiseases.map((item) => 
                    <div className='list-style'>
                        <p>Date : {item.date}</p>
                        <p>Major Disease : {item.majorDisease}</p>
                        <p>Pesticide Used : {item.pesticideUsed}</p>
                        <p>Dosage : {item.dosage} {item.unit}</p>
                    </div>)
                }
            </div>
        </div>
  )
}

export default PestManage