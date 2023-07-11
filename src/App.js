import './App.css';
import { PublicLayout } from './PublicLayout';
import { Routes, Route, } from 'react-router-dom'
import Invoice from './Pages/Invoices/Invoice';
import Dashboard from './Pages/Dashboard/Dashboard'
import PurchaseOrder from './Pages/Invoices/PurchaseOrder/PurchaseOrder';
import InvoiceHistory from './Pages/Invoices/InvoiceHistory/InvoiceHistory';
import Estimate from './Pages/Invoices/Estimate/Estimate'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Invoice />} />
          <Route path='/' element={<Invoice />} />
          <Route path='/purchase-order' element={<PurchaseOrder />} />
          <Route path='/invoice-history' element={<InvoiceHistory />} />
          <Route path='/estimate' element={<Estimate />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
