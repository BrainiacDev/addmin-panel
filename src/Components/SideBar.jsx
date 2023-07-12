import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './sidebar.css'
import Logo from './assets/Logo.svg'
import dashboard from './assets/dashboard.svg'
import invoice from './assets/invoice.svg'
import arrow from './assets/arrow.svg'
import humanResource from './assets/supervised_circle.svg'
import projectM from './assets/project.svg'
import inventory from './assets/inventory.svg'
import accounting from './assets/accounting.svg'
import customer from './assets/customer.svg'
import payStack from './assets/paystack logo.svg'
import notification from './assets/notification-nav.svg'
import polygon from './assets/Polygon.svg'
import polygonfill from './assets/Polygonfill.svg'

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const isInvoicePage = location.pathname === '/invoice' || location.pathname === '/purchase-order';


    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='general_container'>
            <div className="sidebar_container">
                <div className="sidebar_content">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="list_container">
                        <NavLink to='/'>
                            <img src={dashboard} alt="" />
                            <p>Dashboard</p>
                        </NavLink>
                        <Link onClick={toggleSubMenu}>
                            <img src={invoice} alt="" />
                            <p>Invoice</p>
                            <img src={arrow} alt="" />
                        </Link>
                        {
                            isOpen && (
                                <div className='side-submenu'>
                                    <NavLink className={({ isActive }) => isActive ? 'p-link active_link' : 'p-link'} to='/purchase-order'>
                                        <img src={polygonfill} alt="" />
                                        <p>Purchase Order</p> <span>26</span>

                                    </NavLink>
                                    <NavLink className='p-link' to='/invoice-history'>
                                        <img src={polygon} alt="" />
                                        <p>Invoice History </p><span>93</span>

                                    </NavLink>
                                    <NavLink className='p-link' to='/estimate'>
                                        <img src={polygon} alt="" />
                                        <p>Estimate</p><span>125</span>

                                    </NavLink>
                                </div>
                            )
                        }
                        <Link>
                            <img src={humanResource} alt="" />
                            <p>Human Resource</p>
                            <img src={arrow} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={projectM} alt="" />
                            <p>Project Management</p>
                        </Link>
                        <Link to='/'>
                            <img src={inventory} alt="" />
                            <p>Inventory </p>
                        </Link>
                        <Link to='/'>
                            <img src={accounting} alt="" />
                            <p>Accounting</p>
                        </Link>
                        <Link to='/'>
                            <img src={customer} alt="" />
                            <p>Customer Relations</p>
                        </Link>
                    </div>
                </div>
            </div>
            <main className='main_container'>
                <header>
                    <div className="header">
                        <p>Invoice</p>

                        <div className='header-content'>
                            <img src={notification} alt="" />
                            <img src={payStack} alt="" />
                            <p>Kolade</p>
                        </div>
                    </div>
                </header>
                <div className="content_container">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default SideBar
