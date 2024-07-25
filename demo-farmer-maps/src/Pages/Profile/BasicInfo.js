import React from 'react'

const BasicInfo = () => {
    const data = {
        gender : 'Male',
        guardian : 'Ramhetu',
        dob : '23-5-1978',
        mobileAccess : 'Own Number',
        mobileNumber : '6394966720',
        state : 'Uttar Pradesh',
        block : 'Sirauli Gauspur',
        tehsil : 'Sirauli Gauspur',
        village : 'Murai',
        district : 'Barabanki',
    }
  return (
    <div  className=' p-4' style={{fontStyle : 'italic', boxShadow : 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
        <div className="row" > 
            <div className="col-md-6 mt-2 p-4">
                        <h5 className="text-info">Personal Details  </h5>
                        <p>Gender : {data.gender} </p>
                        <p>Guardian's Name : {data.guardian} </p>
                        <p>Date of Birth : {data.dob} </p>
                        <p>Mobile Access :  </p>
                        <p>Mobile Number : {data.mobileNumber} </p>
                        
                    </div>
                    <div className="col-md-6 mt-2 p-4">
                        <h5 className="text-info">Address Details  </h5>
                        <p>State : {data.state} </p>
                        <p>District : {data.district} </p>
                        <p>Block : {data.block} </p>
                        <p>Tehsil : {data.tehsil} </p>
                        <p>Village : {data.village} </p>
                        
                    </div>
                </div>  
    </div>
  )
}

export default BasicInfo