import {useEffect} from 'react';

import PropTypes from 'prop-types';


import {useNavigate} from "react-router-dom"



const Protected = ({children}) => {
  const token=localStorage.getItem('token')
  const navigate=useNavigate()

 const checkToken=token===null
  useEffect(() => {
    if (checkToken){
       return navigate("/");
    }
 },[checkToken]);

return children

};

Protected.propTypes = {};

Protected.defaultProps = {};

export default Protected;
