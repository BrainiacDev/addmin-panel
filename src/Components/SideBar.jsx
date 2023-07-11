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
                        <Link to='/'>
                            <img src={dashboard} alt="" />
                            <p>Dashboard</p>
                        </Link>
                        <div>
                            <img src={invoice} alt="" />
                            <div onClick={toggleSubMenu} className="invoice">Invoice
                                <img src={arrow} alt="" />
                            </div>
                            {
                                isOpen && (
                                    <div>
                                        <NavLink to='/purchase-order'>
                                            <img src={invoice} alt="" />
                                            <p>Purchase Order</p>

                                        </NavLink>
                                        <NavLink to='/invoice-history'>
                                            <img src={invoice} alt="" />
                                            <p>Invoice History</p>

                                        </NavLink>
                                        <NavLink to='/estimate'>
                                            <img src={invoice} alt="" />
                                            <p>Estimate </p>

                                        </NavLink>
                                    </div>
                                )
                            }
                        </div>
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
                            <p>Korede</p>
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
