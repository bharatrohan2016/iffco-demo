import { useState } from "react";
import styles from './FarmerSearchBar.module.css';

const FarmerSearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [farmers, setFarmers] = useState([]);
    const [display, setDisplay] = useState('none');
    const [suggestions, setSuggestions] = useState(
        [
            {
                "firstname": "Ranjeet",
                "isAWDFarmer": "Yes",
                "state": "Uttar Pradesh",
                "district": "Barabanki",
                "tehsil": "Sirauli Gauspur",
                "block": "Sirauli Gauspur",
                "village": "Murai",
                "mobileNumber": "7988889982",
                "ownedLandArea": 12,
                "ownedLandKhasraNumbers": ["12", "882"],
                "leasedLandArea": 5,
                "leasedLandKhasraNumbers": ["334", "223"],
            }, 
            {
                "farmername": "Ravi Kishan",
                "state": "Uttar Pradesh",
                "district": "Agra",
                "tehsil": "Fatehabad",
                "block": "Sirauli Gauspur",
                "village": "Arrji Paliya",
                "mobileNumber": "6398966720",
                "ownedLandArea": 3,
                "leasedLandArea": 0,     
            },
            {
                "farmername": "Rajesh kumar",
                "state": "Uttar Pradesh",
                "district": "NawabGanj",
                "tehsil": "Masauli",
                "block": "Chandanpur",
                "village": "Chandanpur",
                "mobileNumber": "9398966720",
                "ownedLandArea": 3,
                "leasedLandArea": 0,     
            },
            {
                "farmername": "Keshav kumar",
                "state": "Rajasthan",
                "district": "Ajmer",
                "tehsil": "Ajmer",
                "block": "Ajaysar",
                "village": "Ajaysar",
                "mobileNumber": "8398966720",
                "ownedLandArea": 3,
                "leasedLandArea": 0, 
            }
        ]
    );


    const fetchSuggestions = (value) => {
        
        setInputValue(value);
        const [firstname, lastname] = value.split(' ');
        if(lastname){
            const filteredlist = farmers.filter((farmer) => farmer.firstname.toLowerCase().startsWith(firstname.toLowerCase()) && farmer.lastname.toLowerCase().startsWith(lastname.toLowerCase()));
            setSuggestions(filteredlist);
        }else{
            const filteredlist = farmers.filter((farmer) => farmer.firstname.toLowerCase().startsWith(firstname.toLowerCase()));
            setSuggestions(filteredlist);
        }
    }

    const selectHandler = (farmer) => {
        const val = farmer.firstname + ' ' + farmer.lastname;
        setInputValue(val);
        setDisplay('none');
       
    }

    return (
        <div className="row">
            <div className={`ml-2 ${styles.warningMessage}`}>
                <i className='typcn typcn-warning'></i> Please use this real time search bar to select the farmers.
            </div>
            <div className="col-md-12">
                <input className="form-control text-uppercase" value={inputValue} placeholder="search farmer by name" onFocus={() => setDisplay('block')} onChange={(event) => fetchSuggestions(event.target.value)}/>
            </div>
            {
                suggestions.length>0?
                <>
                <ul className="list-group mt-2 ml-2 mr-3 col-md-12 p-2" style={{display, maxHeight : '200px', overflowY : 'scroll', borderRadius : '0px', boxShadow :'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}} >
                {
                    suggestions.map((suggestion, index) => (
                        <li className="text-uppercase farmer-list p-2" key={index} onClick={() => selectHandler(suggestion)}><b>{suggestion.firstname}</b> - {suggestion.village}/ {suggestion.block}/ {suggestion.tehsil} / {suggestion.district}/ {suggestion.state}</li>
                    ))
                }
                 
                </ul>
                <button style={{display}} className="mt-1 ml-2 btn btn-sm btn-secondary" onClick={() => setDisplay('none')}>close</button>
                </> : ''
            }
        </div>
    );
}

export default FarmerSearchBar;