import { Link } from "react-router-dom";

const Sidebar = ({isSidebarOpen}) => {

    return (
        <nav className={`sidebar sidebar-offcanvas ${isSidebarOpen==true? 'active' : ''} bg-green`} id="sidebar"  >
            <ul className="nav">
                <li className='nav-item active'>
                    <Link className="nav-link" to="/farmers">
                    <i className="typcn typcn-group menu-icon"></i>
                    <span className="menu-title">Farmers</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className="nav-link" to="/farmers">
                    <i className="typcn typcn-chart-pie menu-icon"></i>
                    <span className="menu-title">Land Records</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className="nav-link" to="/farmers">
                    <i className="typcn typcn-map menu-icon"></i>
                    <span className="menu-title">Polygon Mapping</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className="nav-link" to="/farmers">
                    <i className="typcn typcn-leaf menu-icon"></i>
                    <span className="menu-title">Crop Information</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className="nav-link" to="/farmers">
                    <i className="typcn typcn-support menu-icon"></i>
                    <span className="menu-title">Pest Manage</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;