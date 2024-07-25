import React from 'react'
import image2 from '../../assets/img/Ranjeet_PM_14Mar2024_Murai_Wheat.png';
import image3 from '../../assets/img/Ranjeet_PM_21Mar2024_Murai_Wheat.png';
import image1 from '../../assets/img/Ranjeet_PM_23Feb2024_Murai_Wheat.png';
import image0 from '../../assets/img/Ranjeet_PM_22Feb2024_Murai_Wheat.png';
const htmlContent = 
        `<html>
        <head>
            <title>Hello HTML</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
        </body>
        </html>`
;

const Surveys = () => {
    const surveys = [
    {
        date : '22 Jan, 2024',
        image : image0
    },
    {
        date : '23 Feb, 2024',
        image : image1
    },
    {
        date : '14 Mar, 2024',
        image : image2
    },
    {
        date : '21 Mar, 2024',
        image : image3
    },
];

const handleNavigation = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(htmlContent);
}
  return (
    <div  className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
        <h4 className='mt-3'>Survey Information</h4>
        
        <div className='lists'>
                        {
                            surveys.map((item, index) => 
                            <div className='list-style'>
                                <h5>Survey-{index+1}</h5>
                                <p>Date : {item.date}</p>
                                <img src={item.image} alt='image' style={{width : '100%'}}/>        
                            </div>)
                        }
        </div>

        <h4 className='mt-4'>Maps</h4>
        <p>Kindly Navigate to next page for the maps.</p>
        <a href="/geo/index.html" target="_blank">Navigate to Maps <i className='typcn typcn-export'></i></a>

    </div>

  )
}

export default Surveys;