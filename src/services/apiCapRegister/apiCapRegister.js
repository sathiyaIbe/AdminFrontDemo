import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export  const ApiCapRegister =  async (details) =>{
    console.log(details)
    return await axios.post('http://localhost:5000/cab/api/cabRegister', details )
  
};


export  const ApiCapGet =  async () =>{
  
    return await axios.get('http://localhost:5000/cab/api/cabRegister',  )
  
};




ApiCapRegister.propTypes = {};

ApiCapRegister.defaultProps = {};

