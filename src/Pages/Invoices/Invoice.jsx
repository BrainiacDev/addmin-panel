import React, { useState } from 'react'
import '../Invoices/invoice.css'
import invoiceImg from '../../Components/assets/invoice.svg'
import arrow from '../../Components/assets/arrow.svg'
import addImg from '../../Components/assets/add.svg'
import percentImg from '../../Components/assets/percent.svg'

const Invoice = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='invoice-container'>
            <div>
                <div className="invoice-tab">
                    <img src={invoiceImg} className='invoice-img' alt="" />
                    <p>Invoice</p>
                    <img src={arrow} alt="" />
                    <h5>New service invoice</h5>
                </div>
                <div className="invoice-form-section">
                    <div className="invoice-content">
                        <h2>Invoice Details</h2>
                        <p>Enter the invoice details below to start creating your invoice</p>
                    </div>
                    <div className="invoice-form">
                        <div className="invoice-detail">
                            <label for="input-detail" class="text">Invoice Number</label>
                            <input className='input-number' type="number" placeholder="INV-000001" name="input" />
                        </div>
                        <div className="invoice-detail">
                            <label for="input-" class="text">Invoice Date</label>
                            <input className='input-date' type="date" name="date" />
                        </div>
                    </div>

                    <div class="invoice-title">
                        <input type="text" placeholder="Invoice title" name="input" className="input" />
                    </div>
                    <div className="invoice-description">
                        <textarea name="tex" placeholder="Invoice Description" cols="30" rows="10" />
                    </div>
                    <p>Invoice</p>
                    <div className="invoice-due-date">
                        <select name="" id="" className="invoice-option">
                            <option value="">Select when due</option>
                            <option>Due on receipt</option>
                            <option className='due'>Due in 5 Days</option>
                            <option className='due'>Due in 7 Days</option>
                            <option className='due'>Due in 10 Days</option>
                            <option className='due'>Due in 15 Days</option>
                            <option className='due'>Due in 30 Days</option>
                            <option className='due'>Due in 45 Days</option>
                            <option className='due'>Due in 60 Days</option>
                            <option className='custom'>Custom</option>
                            <option>Due on receipt</option>
                            <option className='due'>Due in 5 Days</option>
                            <option className='due'>Due in 7 Days</option>
                            <option className='due'>Due in 10 Days</option>
                            <option className='due'>Due in 15 Days</option>
                            <option className='due'>Due in 30 Days</option>
                            <option className='due'>Due in 45 Days</option>
                            <option className='due'>Due in 60 Days</option>
                        </select>
                        <div className="invoice-due-detail">
                            <input className='due-date' placeholder='Due date' />
                        </div>
                    </div>
                </div>
                <div className="invoice-currency">
                    <p>Currency</p>
                    <select>
                        <option>Select preferred currency</option>
                    </select>
                </div>
                <hr />
                <br />
                <hr />
                <table>
                    <tr className='tr'>
                        <th>Item Detail</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='Enter item Description' />
                        </td>
                        <td>
                            <input type="text" placeholder='0.00' />
                        </td>
                        <td>
                            <input type="text" placeholder='0.00' />
                        </td>
                        <td>
                            <input type="text" placeholder='0.00' />
                        </td>
                    </tr>
                </table>
                <div className="addItem-sect">
                    <img src={addImg} alt="" />
                    <p>Add Another Line Item</p>
                </div>
                <div className="moreItems-Section">
                    <p>More Items</p>
                    <div className="moreItems-details">
                        <h2>DISCOUNT</h2>
                        <div className="discount-input">
                            <div className="fixed-discount">
                                <input type="text" placeholder='Fixed' />
                                <img src={arrow} alt="" />
                            </div>
                            <input type="text" placeholder='0.00' />
                            <input type="text" placeholder='0.00' />
                        </div>

                        <div className="tax">
                            <p>TAX (Select all that applies)</p>

                            <div className="tax-select">
                                <div className="check">
                                    <input type="checkbox" checked />Value Added Tax (VAT)
                                </div>
                                <div className="check">
                                    <input type="checkbox" />Withoutholding Tax (WTH)
                                </div>
                            </div>
                        </div>

                        <div className="wat-tax">
                            <h2>WITHOUTHOLDING TAX</h2>

                            <div className="withoutholding-sect">
                                <div className="wat-input-arrow">
                                    <input type="text" placeholder='Percent' />
                                    <img src={arrow} alt="" />
                                </div>
                                <div className="wat-input-arrow">
                                    <input type="text" placeholder='0.00' />
                                    <img src={percentImg} alt="" />
                                </div>
                                <div className="wat-input-number">
                                    <input type="text" placeholder='0.00' />
                                </div>
                            </div>
                        </div>
                        <div className="shipping-section">
                            <h2>SHIPPING FEE (Optional)</h2>
                            <input type="text" placeholder='0.00' />
                        </div>
                        <div className="total">
                            <p>Total: 0.00</p>
                        </div>
                        <hr />

                    </div>
                </div>

                <div className="additionalItem-sect">
                    <p>Additional Items</p>
                    <div class="invoice-title">
                        <input type="text" placeholder="Invoice title" name="input" className="input" />
                    </div>
                    <div className="invoice-description">
                        <textarea name="tex" placeholder="Invoice Description" cols="30" rows="10" />
                    </div>
                </div>
                <div className="attachment-sect">
                    <p>ATTACH A SUPPORTING DOCUMENT</p>
                    <form action="" className='from-upload'>
                        <input type="file" placeholder='add image' />
                    </form>
                </div>
            </div>
            <div className="rightside-section">
                <div>
                    <h3>Create New Service Invoice</h3>
                    <div className="customer">
                        <img src="" alt="" />
                        <p>Customer Details</p>
                    </div>
                    <div className="invoice">
                        <img src="" alt="" />
                        <p>Invoice Details</p>
                    </div>
                    <div className="preview">
                        <img src="" alt="" />
                        <p>Preview</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Invoice