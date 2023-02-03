import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Popup from 'reactjs-popup';


function statusCheck(status){

  if (status==="active") return'success'
  if (status==="inActive") return 'danger'
  if(status==="onBoarding") return 'warning'
}

const Table = (props) => {
  const [name, setName]=useState('')
  const [cabId, setCabId]=useState('')
  const [from, setFrom]=useState('')
  const [to, setTo]=useState('')
  const [status, setStatus]=useState('')

 


return(
<div className="Table" data-testid="Table">
  <div className='table-conatainer'>
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Cab Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>From</th>
          <th scope='col'>Status</th>
          <th scope='col'>To</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.details.map((each)=>{
         function onHandleEdit(){
          
          props.onClickEdit(each._id, each)
        }
        return(
           <tr key={each._id} >
          <td style={{marginLeft:'25px'}}>{each.CabId}</td>
      
              <td className='fw-bold mb-1' style={{marginLeft:'120px'}} >{each.DriverName}</td>

           <td>
             <p className='fw-normal mb-1'>{each.From}</p>
            
           </td>
           <td>
             <MDBBadge color={statusCheck(each.Status)} pill>
               {each.Status}
             </MDBBadge>
           </td>
           <td>{each.To}</td>
           <td>
             
             <button type='button' className='add-btn' onClick={onHandleEdit}>Edit</button>
  
             
           </td>
         </tr>
        )}
        )}
       
        {/* <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>
    </div>
  </div>
);
}

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
