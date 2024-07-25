import { useState } from "react";
import { adjustWidth } from "./Utils/commonFunctions";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
// import Sidebar from "./Components/Sidebar/Sidebar";

const Layout = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth <= 991 ? false : true);
    
    const clickHandler = () => {
        const flag = adjustWidth(isSidebarOpen);
        setIsSidebarOpen(flag);
    }
    useState(() => {
     
    })
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <Header clickHandler={clickHandler} />
                <Sidebar isSidebarOpen = {isSidebarOpen}/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row" style={{paddingTop : '80px'}}>
                            <div className="col-12 grid-margin">
                                <div className={`${children === '<Profile/>' ? '' : 'card'}`}>
                                    <div className="card-body">
                                    {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Layout;