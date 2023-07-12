import React from 'react'
import img1 from '../../../Components/assets/Statusdraft.svg'
import pending from '../../../Components/assets/Statuspending.svg'
import issued from '../../../Components/assets/Statusissued.svg'
import closed from '../../../Components/assets/Statusclosed.svg'
import completed from '../../../Components/assets/Statuscomplete.svg'
import delivered from '../../../Components/assets/Statusdileverd.svg'
import img2 from '../../../Components/assets/more_horizdoted.svg'
import status from '../../../Components/assets/view_columnstatus.svg'
import arrowLeft from '../../../Components/assets/arrow_left.svg'
import arrowRight from '../../../Components/assets/arrow_right.svg'
import cross from '../../../Components/assets/addwhite.svg'
import search from '../../../Components/assets/search.svg'
import fileDownload from '../../../Components/assets/file_download.svg'

import './PurchaseOrder.css'

const PurchaseOrder = () => {
    return (




        <div className='purchase_container'>
            <div className="purchase-order">
                <div className="purchase-content">
                    <h2>Purchase Order</h2>
                    <p>You currently have 26 purchase orders </p>
                </div>
                <div className="create-btn">
                    <button><img src={cross} alt="" />Create New Purchase Order</button>
                </div>
            </div>

            <div className="search-section">
                <div className="search-input-section">
                    <div className="serch-input">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search by vendor name, id, amount...' />
                    </div>
                    <div className="select">
                        <select>
                            <option value="status">Status</option>
                        </select>
                    </div>
                </div>
                <div className="sorting-section">
                    <div className="sort-content">
                        <p>Sort</p>
                        <select>
                            <option value="status">Date Added</option>
                        </select>
                            <img src={fileDownload} alt="" />
                        <select>
                            <option value="status">Export</option>
                        </select>

                    </div>
                </div>
            </div>

            <table>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>#Purchase Order</th>
                    <th>Date created</th>
                    <th>vendor name</th>
                    <th>Expected delivery date</th>
                    <th>Purchase Order Amount</th>
                    <th>outstanding balance</th>
                    <th>status</th>
                    <th><img src={status} alt="" /></th>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={img1} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={pending} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={issued} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={closed} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={delivered} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={completed} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={img1} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={issued} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={completed} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>PO-000026</td>
                    <td>Dec. 14, 2022 8:32 AM</td>
                    <td>DeliverPal</td>
                    <td>Dec. 19, 2022 8:32 AM</td>
                    <td>N 170,000.00</td>
                    <td>N 170,000.00</td>
                    <td><img src={issued} alt="" /></td>
                    <td><img src={img2} alt="" /></td>
                </tr>
            </table>

            <div className="pagination">
                <div className="page">
                    <p>Page 1 0f 3</p>
                    <div className="page-number">
                        <img className='arrow-left' src={arrowLeft} alt="" />
                        <p className='para'>1</p>
                        <p>2</p>
                        <p>3</p>
                        <img className='arrow-right' src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="show-row-page">
                    <p>Show:</p>
                    <select>
                        <option value="10">10 rows</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PurchaseOrder