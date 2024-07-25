// color- #00c8bf, #198d88
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/bharatrohan-4.png";
import { NotificationManager } from "react-notifications";
import { getRandomQuote } from "../../Utils/commonFunctions";

function Header(props){
    const navigate = useNavigate();
    const [quote, setQuote] = useState('');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    async function logout(){
      localStorage.clear();
      navigate('/login');
      NotificationManager.success('Logged Out Successfully.')
    } 
    useState(()=>{
      setQuote(getRandomQuote());
    },[]);
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row bg-green">
        <div className="navbar-brand-wrapper d-flex justify-content-center">
          <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand brand-logo" href="/#/farmers">
              <img src={logo2} alt="logo"/>
            </a>
            <a className="navbar-brand brand-logo-mini" href="/#/farmers"><img src={logo} alt="logo"/></a>
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={props.clickHandler}>
              <span className="typcn typcn-th-menu"></span>
            </button>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-user-status dropdown text-white" style={{fontSize : '16px'}}>
           <i>“{quote}”</i>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-date dropdown">
            <a className="nav-link d-flex justify-content-center align-items-center text-white">
              <h6 className="date mb-0">Today : {months[(new Date()).getMonth()]} {(new Date()).getDate()}</h6>
              <i className="typcn typcn-calendar"></i>
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a onClick={() => {navigate('/admin-profile')}} className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center text-white" id="messageDropdown" href="#" data-toggle="dropdown">
              <i className="typcn typcn-user mx-0"></i> 
            </a>
          </li> */}
          <li className="nav-item dropdown mr-0">
            <a className="nav-link btn count-indicator dropdown-toggle d-flex align-items-center justify-content-center text-white" id="notificationDropdown" data-toggle="tooltip" data-placement="top" title="Logout" onClick={logout}>
              <i className="typcn typcn-power mx-0"></i>
            </a>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" onClick={props.clickHandler}>
          <span className="typcn typcn-th-menu text-white"></span>
        </button>
      </div>
    </nav>
    );
}

export default Header;