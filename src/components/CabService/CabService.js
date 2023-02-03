import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CabService.css';
import Header from '../../core/header/header';
import Sidebar from '../../core/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import Table from '../../core/Table/Table';
import Popup from 'reactjs-popup';
import {ApiCapRegister} from '../../services/apiCapRegister/apiCapRegister'
import { ApiCapGet } from '../../services/apiCapRegister/apiCapRegister';
import Context from '../../services/Context/Context';

const CabService = () =>{ 

  const [sidebar, setSidebar]=useState(false)
  const [name, setName]=useState('')
  const [cabId, setCabId]=useState('')
  const [from, setFrom]=useState('')
  const [to, setTo]=useState('')
  const [status, setStatus]=useState('')
  const [details, setDetails]=useState('')
  const [newData, setNewData]=useState(false)
  const [editData, setEditData]=useState('')
  const [editClicked, setEditClicked]=useState(false)
  const [editName, setEditName]=useState('')
  const [editCabId, setEditCabId]=useState('')
  const [editFrom, setEditFrom]=useState('')
  const [editTo, setEditTo]=useState('')
  const [editStatus, setEditStatus]=useState('')

  const onClickEdit=(id,editDetails)=>{
    console.log(editDetails)
   
    setEditClicked(true)
    setEditCabId(editDetails.CabId)
    setEditName(editDetails.DriverName)
    setEditFrom(editDetails.From)
    setEditTo(editDetails.To)
    setEditStatus(editDetails.Status)

  }
  function onHandleSubmit (e){
    e.preventDefault()
    const payLoad={
      name: name,
      cabId: cabId,
      from: from,
      to: to,
      status: status,
    }
    ApiCapRegister(payLoad)
    .then(res=>{
      ApiCapGet()
   .then( res=>{ 
    setDetails(res.data)
    setNewData(true)
   
    }).catch(err=>{
      console.log(err)
    })


    }).catch(err=>{
      console.log(err)
    })
  
  }

  useEffect(()=>{
    ApiCapGet()
   .then( res=>{ 
    setDetails(res.data)
    setNewData(true)
   
    }).catch(err=>{
      console.log(err)
    })

},[]);

  return(
    <Context.Consumer>
      {value=>{
      const{sidebar}=value
      return(

  
  <div className="CabService" data-testid="CabService">
   <div className='sidebar-page-container-cab'>
   <Header  />
   <div className={`cab-service-body-container ${sidebar ?'sidebar-cab-service' :''}`}>
   <h1>CabService Page</h1>
   <div className='cab-body-container'>
   <div className='table-container-cab'>
   
   <Popup trigger={<button type='button' className='add-btn'> Add New</button>} position="bottom right">
    <div className='cab-form-container'>
      <form className='cab-form' onSubmit={onHandleSubmit}>
        <h3>Add New</h3>
        name<input type='text' onChange={(e)=>(setName(e.target.value))} value={name} />
        CabId<input type='text' onChange={(e)=>(setCabId(e.target.value))} value={cabId} />
       From <input type='text' onChange={(e)=>(setFrom(e.target.value))} value={from} />
        To<input type='text' onChange={(e)=>(setTo (e.target.value))} value={to} />
        <select   className="custom-select"  value={status} onChange ={(e)=>(setStatus (e.target.value))}>
  <option defaultValue>Status</option>
  <option value="active" >Active</option>
  <option value="inActive" >In Active</option>
  <option value="onBoarding">On Borading</option>
</select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  </Popup>

    
    {newData&& <Table  details={details} onClickEdit={onClickEdit} />}
    {editClicked &&
     <div className='cab-form-container'>
     <form className='cab-form' >
       <h3>Edit</h3>
       name<input type='text' onChange={(e)=>(setEditName(e.target.value))} value={editName}  />
       CabId<input type='text' onChange={(e)=>(setEditCabId(e.target.value))} value={editCabId} />
      From <input type='text' onChange={(e)=>(setEditFrom(e.target.value))} value={editFrom} />
       To<input type='text' onChange={(e)=>(setEditTo (e.target.value))} value={editTo} />
       <select   className="custom-select"  value={editStatus} onChange ={(e)=>(setEditStatus (e.target.value))}>
 <option defaultValue>Status</option>
 <option value="active" >Active</option>
 <option value="inActive" >In Active</option>
 <option value="onBoarding">On Borading</option>
</select>
       <button type='submit'>Submit</button>
     </form>
   </div>
    }

   
   </div>
   </div>
   </div>
   </div>
   </div>
       )
      }}
    </Context.Consumer>

)
}

CabService.propTypes = {};

CabService.defaultProps = {};

export default CabService;
