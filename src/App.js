
import { Routes, Route ,   BrowserRouter as Router, } from 'react-router-dom'
import './App.css';
import Login from '../src/components/Login/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Protected from './services/ProtectedRoute/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import ECommerce from './components/ECommerce/ECommerce';
import BookingStatus from './components/BookingStatus/BookingStatus';
import CabService from './components/CabService/CabService';
function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<Protected ><Login /> </Protected>}></Route>
        <Route exact path ='/admin-dashboard' element={<Protected ><AdminDashboard /> </Protected>}></Route>
        <Route exact path ='/e-commerce' element={<Protected ><ECommerce /> </Protected>}></Route>
        <Route exact path ='/booking-status' element={<Protected ><BookingStatus /> </Protected>}></Route>
        <Route exact path ='/cab-service' element={<Protected ><CabService /> </Protected>}></Route>
        <Route path='*' element={<NotFound />}></Route>
       
        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
