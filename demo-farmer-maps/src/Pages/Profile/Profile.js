import React, { useState } from 'react'
import styles from './Profile.module.css'
import CropDetails from './CropDetails';
import IrrigationDetails from './IrrigationDetails';
import NutrientManage from './NutrientManage';
import PestManage from './PestManage';
import Surveys from './Surveys';
import BasicInfo from './BasicInfo';
const Profile = () => {
    const [tabNumber, setTabNumber] = useState(1);
    return (
        <div className=' p-0'>
           
                    <div className="col-12 grid-margin p-0">
                        <div className="card p-3" style={{backgroundColor : '#d1ded1', boxShadow : 'none'}}>
                            <h4 className="m-0">Ranjeet Verma</h4>
                        </div>
                    </div>
                    <nav className="col-md-12 p-0">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist"  style={{fontStyle : 'italic', textTransform : 'capitalize'}}>
                            <button className={`nav-link ${tabNumber === 0 ? 'active' : ''} ${styles.navStyles}`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => setTabNumber(0)}>Basic Details</button>
                            <button className={`nav-link ${tabNumber === 1 ? 'active' : ''} ${styles.navStyles}`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => setTabNumber(1)}>Crop Details</button>
                            <button className={`nav-link ${tabNumber === 2 ? 'active' : ''} ${styles.navStyles}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => setTabNumber(2)}>Nutrient Management</button>
                            <button className={`nav-link ${tabNumber === 3 ? 'active' : ''} ${styles.navStyles}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => setTabNumber(3)}>Irrigation Details</button>
                            <button className={`nav-link ${tabNumber === 4 ? 'active' : ''} ${styles.navStyles}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => setTabNumber(4)}>Pest Management</button> 
                            <button className={`nav-link ${tabNumber === 5 ? 'active' : ''} ${styles.navStyles}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => setTabNumber(5)}>Survey Records</button> 
                        </div>
                    </nav>
                    <div className="tab-content col-md-12 p-0" id="nav-tabContent">
                        {
                            tabNumber === 0 ?  
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <BasicInfo/>
                            </div> : ''
                        }
                        {
                            tabNumber === 1 ?  
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <CropDetails/>
                            </div> : ''
                        }
                        {
                            tabNumber === 2 ?  
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <NutrientManage/>
                            </div> : ''
                        }
                        {
                            tabNumber === 3 ?  
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <IrrigationDetails/>
                            </div> : ''
                        }
                        {
                            tabNumber === 4 ?  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <PestManage/>
                            </div> : ''
                        }
                        {
                            tabNumber === 5 ?  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <Surveys/>
                            </div> : ''
                        }
                        
                     </div>
                
        </div>
    )
}

export default Profile;